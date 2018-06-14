import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startsWithSegment, endsWithSegment } from 'router5-helpers';

import { RouterSelectors } from '../routing-selectors';

const RouteComponent = ({
  route: { name },
  startsWith,
  endsWith,
  exact,
  component: Component
}) => {
  if (startsWith && !endsWith && !exact) {
    return startsWithSegment(name)(startsWith) && <Component />;
  } else if (endsWith && !startsWith && !exact) {
    return endsWithSegment(name)(endsWith) && <Component />;
  } else if (exact && !startsWith && !endsWith) {
    return exact === name && <Component />;
  } else {
    throw new Error(
      'Invalid state, you need to either provide startsWith, endsWith or exact prop'
    );
  }
};

/**
 * @interface RouteProps
 *
 * @prop {Component} component The component to render
 * @prop {string} [startsWith] Renders the component if the route name starts with this
 * @prop {string} [endsWith] Renders the component if the route name ends with this
 * @prop {string} [exact] Renders the component if the route name exactly matches this
 */
RouteComponent.propTypes = {
  route: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  startsWith: PropTypes.string,
  endsWith: PropTypes.string,
  exact: PropTypes.string,
  component: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  route: RouterSelectors.getCurrentRoute(state)
});

/**
 * Renders a component based on the match with the name of the current route
 *
 * You have to set exactly one of `startsWith`, `endsWith`, or `exact` prop.
 *
 * @kind function
 * @param {RouteProps} props Properties
 */
export const Route = connect(mapStateToProps)(RouteComponent);
