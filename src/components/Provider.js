// @flow
import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

class Provider extends Component {
  static propTypes = {
    instance: PropTypes.func,
  }

  static childContextTypes = {
    hz: PropTypes.func
  }

  getChildContext() {
    return { hz: this.props.instance };
  }

  constructor(props, context) {
    super(props, context);

    this.props.instance.connect();
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default Provider;
