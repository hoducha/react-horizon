import React, { Component, PropTypes, createElement } from 'react';

export default function connect() {
  return function(ReactComponent) {
    return class extends Component {
      static contextTypes = {
        hz: PropTypes.func
      }

      constructor(props, context) {
        super(props, context);
      }

      render() {
        return createElement(ReactComponent, {
          ...this.props,
          hz: this.context.hz
        });
      }
    }
  }
}
