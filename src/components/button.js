import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value, color, width } = this.props;
    const styles = { ...color, ...width };
    return (
      <button type="button" className="btn" style={styles}>
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default Button;
