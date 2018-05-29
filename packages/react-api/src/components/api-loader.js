import React from 'react';
import { connect } from 'react-redux';

import { ApiSelectors } from '../api-selectors';

const ApiLoaderComponent = ({ loading }) => loading && <div>Loading...</div>;

const mapStateToProps = state => ({
  loading: ApiSelectors.isLoading(state)
});

/**
 * A simple component that shows a loading indicator
 *
 * @kind function
 */
export const ApiLoader = connect(mapStateToProps)(ApiLoaderComponent);
