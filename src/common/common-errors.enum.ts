/**
 * @see: https://shelly-api-docs.shelly.cloud/gen2/General/CommonErrors
 */
export enum CommonErrors {
  // https://shelly-api-docs.shelly.cloud/gen2/General/CommonErrors#-103-invalid-argument
  InvalidArgument = -103,
  // https://shelly-api-docs.shelly.cloud/gen2/General/CommonErrors#-104-deadline-exceeded
  DeadlineExceeded = -104,
  // https://shelly-api-docs.shelly.cloud/gen2/ComponentsAndServices/KVS/#kvsdelete
  KeyNotFound = -105,
  ResourceAlreadyExists = -106,
  // https://shelly-api-docs.shelly.cloud/gen2/General/CommonErrors#-108-resource-exhausted
  ResourceExausted = -108,
  // https://shelly-api-docs.shelly.cloud/gen2/General/CommonErrors#-109-failed-precondition
  FailedPreconditon = -109,
  // https://shelly-api-docs.shelly.cloud/gen2/General/CommonErrors#-114-unavailable
  Unavaliable = -114,
  // No handler was found to process the request
  NoHandlerFound = 404,

  // Non-shelly error code. Added for consistency. https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408
  RequestTimeout = 408,
}
