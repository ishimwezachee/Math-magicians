import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value } = this.props;
    return <button type="button" className="btn">{value}</button>;
  }
}

Button.propTypes = {
  value: PropTypes.isRequired,
};

export default Button;
