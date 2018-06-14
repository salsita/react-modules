import {
  ApiError,
  BusinessValidationError,
  NETWORK_ERROR,
  UNKNOWN_API_ERROR
} from './api-errors';

import { HTTP_CONFLICT } from './api-status-codes';

/**
 * Wraps function with try/catch block to catch all the API errors
 * and translate them to according exceptions.
 *
 * @kind function
 * @param {Function} call A function calling an API client and returning promise
 * @returns {Function} Wrapped API call function
 */
export const wrapApiCall = call => async (...params) => {
  try {
    const { data } = await call(...params);

    return data;
  } catch ({ response, message }) {
    if (response) {
      const { data, status } = response;
      // Deal with all the possible statuses here
      // most likely just adding a case is good enough
      switch (status) {
        case HTTP_CONFLICT:
          throw new BusinessValidationError(data);

        default:
          // all the statuses should be defaulted to unknown generic api error
          throw new ApiError(UNKNOWN_API_ERROR, data);
      }
    } else {
      // If there is no response, it's considered a network problem
      throw new ApiError(NETWORK_ERROR, message);
    }
  }
};
