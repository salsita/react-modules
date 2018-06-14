export const NETWORK_ERROR = 'networkError';
export const UNKNOWN_API_ERROR = 'unknownError';
export const API_VALIDATION_ERROR = 'validationError';

/**
 * The base class for API errors
 */
export class ApiError {
  /**
   * Creates an API error
   *
   * @name ApiError#constructor
   * @kind function
   * @param {string} type Type of the error
   * @param {string} reason Reason of the error
   */
  constructor(type, reason) {
    this.reason = reason;
    this.type = type;
  }

  /**
   * Get the error reason
   *
   * @returns {string} The error reason
   */
  getReason() {
    return this.reason;
  }

  /**
   * Get the error type
   *
   * @returns {string} The error type
   */
  getType() {
    return this.type;
  }
}

/**
 * The class for business validation error
 */
export class BusinessValidationError extends ApiError {
  /**
   * Creates a business validation error
   *
   * @name BusinessValidationError#constructor
   * @kind function
   * @param {string} reason The error reason
   */
  constructor(reason) {
    super(API_VALIDATION_ERROR, reason);
  }
}
