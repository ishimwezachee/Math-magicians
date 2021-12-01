import React, { Component } from 'react';
import Button from './button';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const backround = { backgroundColor: 'orange' };
    const size = { width: '200px' };
    return (
      <div className="calc">
        <div className="input">
          <input className="inputField" type="text" value="0" />
        </div>
        <div className="line">
          <Button value="AC" />
          <Button value="+/-" />
          <Button value="%" />
          <Button value="/" color={backround} />
        </div>
        <div className="line">
          <Button value="7" />
          <Button value="8" />
          <Button value="9" />
          <Button value="*" color={backround} />
        </div>
        <div className="line">
          <Button value="4" />
          <Button value="5" />
          <Button value="6" />
          <Button value="-" color={backround} />
        </div>
        <div className="line">
          <Button value="1" />
          <Button value="2" />
          <Button value="3" />
          <Button value="+" color={backround} />
        </div>
        <div className="line">
          <Button value="0" width={size} />
          <Button value="." />
          <Button value="=" color={backround} />
        </div>
      </div>
    );
  }
}

export default Calculator;
