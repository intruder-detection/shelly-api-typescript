import axios, { AxiosError } from 'axios';
import { Gen1Endpoints, ShellyEndpoints } from '@gen1/enums/endpoints.enum';
import { SettingsCloudResponse } from '@gen1/types/gen1/settings-cloud.types';
import { SettingsLoginRequest, SettingsLoginResponse } from '@gen1/types/gen1/settings-login.types';
import { ShellyResponse } from '@gen1/types/gen1/shelly.types';
import { StatusResponse } from '@gen1/types/gen1/status.types';
import { SettingsRequest, SettingsResponse } from '@gen1/types/gen1/settings.types';
import { SettingsActionsResponse } from '@gen1/types/gen1/settings-actions.types';
import { SettingsWifiAccessPointRequest, SettingsWifiAccessPointResponse } from '@gen1/types/gen1/settings-wifi-access-point.types';
import { SettingsWifiStationRequest, SettingsWifiStationResponse } from '@gen1/types/gen1/settings-wifi-station.types';
import { AxiosErrorCodes } from '@common/generic.types';
import { CommonErrors } from '@common/common-errors.enum';

export class Gen1Device {
  constructor(
    private readonly ip: string,
    private readonly id: number = 1,
  ) {}

  /**
   * Converts a JavaScript object to a URL query string.
   * @example:
   *  queryStringify({ a: 1, b: 2 }) // returns 'a=1&b=2'
   *  queryStringify({ a: 1, b: [2, 3] }) // returns 'a=1&b=2&b=3'
   *  queryStringify({ a: 1, b: null }) // returns 'a=1'
   *  queryStringify({ a: 1, b: undefined }) // returns 'a=1'
   *  queryStringify({ a: 1, b: [null, undefined] }) // returns 'a=1'
   *  queryStringify({ a: 1, b: [2, null, 3, undefined] }) // returns 'a=1&b=2&b=3'
   * @param source - The object to convert.
   * @returns The URL query string.
   */
  private static queryStringify(
    source: Record<string, string | number | boolean | readonly string[] | readonly number[] | readonly boolean[] | null | undefined>,
  ): string {
    const urlSearch = new URLSearchParams();

    Object.entries(source).forEach(([key, value]) => {
      // The behavior of query parameters without a value is actually not well-defined by the URL specification,
      // so we ignore it
      if (value === null || value === undefined) {
        return;
      }
      if (value instanceof Array) {
        for (const innerValue of value) {
          if (innerValue !== null && innerValue !== undefined) {
            urlSearch.append(key, innerValue.toString());
          }
        }
        return urlSearch;
      }
      return urlSearch.append(key, value.toString());
    });

    return urlSearch.toString();
  }

  async shelly(): Promise<ShellyResponse> {
    return await this.post(ShellyEndpoints.Shelly);
  }

  async status(): Promise<StatusResponse> {
    return await this.post(ShellyEndpoints.Status);
  }

  async settings(params?: SettingsRequest): Promise<SettingsResponse> {
    return await this.post(ShellyEndpoints.Settings, params);
  }

  async settingsActions(): Promise<SettingsActionsResponse> {
    return await this.post(ShellyEndpoints.SettingsActions);
  }

  async settingsWifiAccessPoint(params?: SettingsWifiAccessPointRequest): Promise<SettingsWifiAccessPointResponse> {
    return await this.post(ShellyEndpoints.SettingsWifiAccessPoint, params);
  }

  async settingsWifiStation(params?: SettingsWifiStationRequest): Promise<SettingsWifiStationResponse> {
    return await this.post(ShellyEndpoints.SettingsWifiStation, params);
  }

  async setSettingsLogin(params: SettingsLoginRequest): Promise<SettingsLoginResponse> {
    return await this.post(ShellyEndpoints.SettingsLogin, params);
  }

  async getSettingsLogin(): Promise<SettingsLoginResponse> {
    return await this.get(ShellyEndpoints.SettingsLogin);
  }

  async settingsCloud(): Promise<SettingsCloudResponse> {
    return await this.post(ShellyEndpoints.SettingsCloud);
  }

  async wifiScan(): Promise<SettingsCloudResponse> {
    return await this.post(ShellyEndpoints.WifiScan);
  }

  protected async post<T>(
    endpoint: Gen1Endpoints,
    params: {
      [key: string]: any;
    } = {},
  ): Promise<T> {
    const data = Object.keys(params)
      .map((key) => `${key}=${encodeURIComponent(params[key])}`)
      .join('&');
    try {
      return (
        await axios.post<T>(`http://${this.ip}/${endpoint}`, data, {
          timeout: 5000, // TODO: Provide as an environment variable
          transitional: { clarifyTimeoutError: true },
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
          },
        })
      ).data;
    } catch (e: unknown) {
      // TODO: Logger
      return {
        id: this.id,
        src: this.ip,
        error: {
          code: (e as AxiosError).code === AxiosErrorCodes.Timeout ? CommonErrors.RequestTimeout : CommonErrors.NoHandlerFound,
          message: `Error trying to request endpoint: ${endpoint} on shelly device with IP: ${this.ip}`,
        },
      } as unknown as T;
    }
  }

  protected async get<T>(endpoint: Gen1Endpoints, queryParameters?: { [key: string]: any }): Promise<T> {
    try {
      return (
        await axios.get<T>(`http://${this.ip}/${endpoint}${queryParameters ? `?${Gen1Device.queryStringify(queryParameters)}` : ''}`, {
          timeout: 5000, // TODO: Provide as an environment variable
          transitional: { clarifyTimeoutError: true },
        })
      ).data;
    } catch (e: unknown) {
      // TODO: Logger
      return {
        id: this.id,
        error: {
          code: (e as AxiosError).code === AxiosErrorCodes.Timeout ? CommonErrors.RequestTimeout : CommonErrors.NoHandlerFound,
          message: `Error trying to request endpoint: ${endpoint} on shelly device with IP: ${this.ip}`,
        },
      } as T;
    }
  }
}
