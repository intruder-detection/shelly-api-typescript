import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { BaseRequest, BaseShellyResponse } from '@common/generic.types';
import { Shelly2PlusMapping } from '@common/shelly-2-plus.common.interface';

export class ShellyGen2PlusHTTPAPI {
  constructor(private readonly ip: string) {}

  protected static get defaultRequestConfig(): AxiosRequestConfig {
    return {
      headers: {
        contentType: 'application/json',
      },
      timeout: 5000, // TODO: Provide as an environment variable
      transitional: { clarifyTimeoutError: true },
      responseType: 'json',
    };
  }

  static buildBodyData<E extends keyof Shelly2PlusMapping>(endpoint: E, bodyData: Shelly2PlusMapping[typeof endpoint]['body']) {
    return {
      id: 1,
      method: endpoint,
      src: 'my_self',
      params: bodyData,
    } as BaseRequest;
  }

  async post<E extends keyof Shelly2PlusMapping>(
    endpoint: E,
    body?: Shelly2PlusMapping[typeof endpoint]['body'],
  ): Promise<Shelly2PlusMapping[typeof endpoint]['response']> {
    try {
      const rxp = await axios.post<Shelly2PlusMapping[typeof endpoint]['response']>(
        this.getUrl(),
        ShellyGen2PlusHTTPAPI.buildBodyData(endpoint, body),
        ShellyGen2PlusHTTPAPI.defaultRequestConfig,
      );
      const data = rxp.data as BaseShellyResponse;
      if (data.error) {
        throw new AxiosError(data.error.message, String(data.error.code));
      }
      return rxp.data;
    } catch (e: unknown) {
      this.throwError(endpoint as string, e as AxiosError);
    }
  }

  async get<E extends keyof Shelly2PlusMapping>(endpoint: E): Promise<Shelly2PlusMapping[typeof endpoint]['response']> {
    try {
      const rxp = await axios.get<Shelly2PlusMapping[typeof endpoint]['response']>(
        this.getUrl(endpoint),
        ShellyGen2PlusHTTPAPI.defaultRequestConfig,
      );
      const data = rxp.data as BaseShellyResponse;
      if (data.error) {
        throw new AxiosError(data.error.message, String(data.error.code));
      }
      return rxp.data;
    } catch (e: unknown) {
      this.throwError(endpoint, e as AxiosError);
    }
  }

  protected throwError(endpoint: string, e: AxiosError) {
    throw new Error(
      `Failed to run command ${endpoint} on device ${this.ip}. Error is: ${e.message}. Error code: ${e.code} (See CommonErrors enum for more information).`,
    );
  }

  protected getUrl(endpoint: string = 'rpc') {
    return `http://${this.ip}/${endpoint}`;
  }
}
