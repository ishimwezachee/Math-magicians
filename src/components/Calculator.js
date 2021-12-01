import React, { Component } from 'react';
import Button from './button';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="input">
          <input type="text" value="0" />
        </div>
        <div className="line">
          <Button value="AC" />
          <Button value="+/-" />
          <Button value="%" />
          <Button value="+" />
        </div>
        <div className="line">
          <Button value="AC" />
          <Button value="+/-" />
          <Button value="%" />
          <Button value="+" />
        </div>
        <div className="line">
          <Button value="AC" />
          <Button value="+/-" />
          <Button value="%" />
          <Button value="+" />
        </div>
        <div className="line">
          <Button value="AC" />
          <Button value="+/-" />
          <Button value="%" />
          <Button value="+" />
        </div>
        <div className="line">
          <Button value="+/-" />
          <Button value="%" />
          <Button value="+" />
        </div>
      </div>
    );
  }
}

export default Calculator;
