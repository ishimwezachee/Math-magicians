import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      value, color, width, click,
    } = this.props;
    const styles = { ...color, ...width };
    return (
      <button type="button" className="btn" style={styles} onClick={click}>
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default Button;
