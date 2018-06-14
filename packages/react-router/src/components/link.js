import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions } from 'redux-router5';

const LinkComponent = ({ onClick, children }) => (
  <a onClick={onClick}>{children}</a>
);

LinkComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

const mapDispatchToProps = {
  onClick: actions.navigateTo
};

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  onClick: () => dispatchProps.onClick(ownProps.name, ownProps.params)
});

/**
 * router5 synchronized link component
 * changes router state in the app state
 */
/**
 * Renders a link
 *
 * @kind function
 * @param {LinkProps} props Properties
 */
export const Link = connect(
  null,
  mapDispatchToProps,
  mergeProps
)(LinkComponent);

/**
 * @interface LinkProps
 *
 * @prop {string} name Route name
 * @prop {object} [params] Route params
 */
Link.propTypes = {
  name: PropTypes.string.isRequired,
  params: PropTypes.object
};
