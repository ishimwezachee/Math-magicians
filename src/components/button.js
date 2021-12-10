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
    return (
      <button type="button" className="btn" style={{ ...color, ...width }} onClick={click}>
        {value}
      </button>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
  color: PropTypes.objectOf(PropTypes.any),
  width: PropTypes.objectOf(PropTypes.any),
  click: PropTypes.func,
};

Button.defaultProps = {
  width: {},
  value: '',
  color: {},
  click: () => '',
};

export default Button;
