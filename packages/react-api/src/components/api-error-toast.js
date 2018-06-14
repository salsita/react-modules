import React from 'react';
import { connect } from 'react-redux';

import { ApiSelectors } from '../api-selectors';

const ApiErrorToastComponent = ({ error }) => error && <div>{error}</div>;

const mapStateToProps = state => ({
  error: ApiSelectors.getError(state)
});

/**
 * A simple component that shows an error toast message
 *
 * @kind function
 */
export const ApiErrorToast = connect(mapStateToProps)(ApiErrorToastComponent);
