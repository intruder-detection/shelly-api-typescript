import { CommonErrors } from '@gen2/common-errors.enum';

/**
 * @see: https://shelly-api-docs.shelly.cloud/gen2/General/RPCProtocol#response-frame
 */
export interface BaseResponse<T = undefined> {
  id: number;
  /**
   * Name of the device
   */
  src: string;
  /**
   *
   */
  dst?: string;
  /**
   * On success, the result will contain this property.
   */
  result?: T;
  /**
   * On error, the result will contain this property.
   */
  error?: BaseError;
}

interface BaseError {
  code: CommonErrors;
  message: string;
}

export interface BaseRequest {
  id: number;
  method: string;
  src?: string;
  params?: { [key: string]: any }
}

export enum AxiosErrorCodes {
  Timeout = 'ETIMEDOUT',
  ConnectionAborted = 'ECONNABORTED',
}

export type EmptyResponse = BaseResponse<null>;
