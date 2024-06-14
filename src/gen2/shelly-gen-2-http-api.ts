import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { ShellyGen2HTTPAPIMapping } from './endpoint-types.types';
import { BaseRequest } from '@gen2/generic.types';

export class ShellyGen2DeviceHTTPAPI {
  constructor(private readonly ip: string) {}

  private get url() {
    return `http://${this.ip}/rpc`;
  }

  static get defaultRequestConfig(): AxiosRequestConfig {
    return {
      headers: {
        contentType: 'application/json',
      },
      timeout: 5000, // TODO: Provide as an environment variable
      transitional: { clarifyTimeoutError: true },
      responseType: 'json',
    };
  }

  static buildBodyData<E extends keyof ShellyGen2HTTPAPIMapping>(endpoint: E, bodyData: ShellyGen2HTTPAPIMapping[typeof endpoint]['body']) {
    return {
      id: 1,
      method: endpoint,
      src: 'my_self',
      params: bodyData,
    } as BaseRequest;
  }

  static throwError(endpoint: string, url: string, e: AxiosError) {
    const errorMessage = (e.response?.data as { message: string }).message;
    throw new Error(`Failed to run command ${endpoint}. URL: ${url}. Status: ${e.response.status}. Error is: ${errorMessage}`);
  }

  async post<E extends keyof ShellyGen2HTTPAPIMapping>(
    endpoint: E,
    body?: ShellyGen2HTTPAPIMapping[typeof endpoint]['body'],
    queryParams?: ShellyGen2HTTPAPIMapping[typeof endpoint]['queryParams'],
  ): Promise<ShellyGen2HTTPAPIMapping[typeof endpoint]['response']> {
    try {
      const rxp = await axios.post<ShellyGen2HTTPAPIMapping[typeof endpoint]['response']>(
        this.url,
        ShellyGen2DeviceHTTPAPI.buildBodyData(endpoint, body),
        ShellyGen2DeviceHTTPAPI.defaultRequestConfig,
      );
      return rxp.data;
    } catch (e: unknown) {
      ShellyGen2DeviceHTTPAPI.throwError(endpoint, this.url, e as AxiosError);
    }
  }
}
