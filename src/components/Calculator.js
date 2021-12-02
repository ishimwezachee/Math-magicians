import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Button from './button';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
  }

  render() {
    const backround = { backgroundColor: 'orange' };
    const size = { width: '200px' };

    const clickHandler = (buttonName) => {
      const name = buttonName.target.innerText;
      const { total, next, operation } = calculate(this.state, name);
      this.setState({ total, next, operation });
    };
    const { total, next, operation } = this.state;

    const display = () => {
      if (next) {
        return next;
      }

      if (operation) {
        return operation;
      }
      if (total) {
        return total;
      }
      return 0;
    };

    return (
      <div className="calc">
        <div className="input">
          <input
            className="inputField"
            placeholder="0"
            type="text"
            value={display()}
            onChange={() => console.log('')}
          />
        </div>
        <div className="line">
          <Button value="AC" click={clickHandler} />
          <Button value="+/-" click={clickHandler} />
          <Button value="%" click={clickHandler} />
          <Button value="÷" color={backround} click={clickHandler} />
        </div>
        <div className="line">
          <Button value="7" click={clickHandler} />
          <Button value="8" click={clickHandler} />
          <Button value="9" click={clickHandler} />
          <Button value="x" color={backround} click={clickHandler} />
        </div>
        <div className="line">
          <Button value="4" click={clickHandler} />
          <Button value="5" click={clickHandler} />
          <Button value="6" click={clickHandler} />
          <Button value="-" color={backround} click={clickHandler} />
        </div>
        <div className="line">
          <Button value="1" click={clickHandler} />
          <Button value="2" click={clickHandler} />
          <Button value="3" click={clickHandler} />
          <Button value="+" click={clickHandler} color={backround} />
        </div>
        <div className="line">
          <Button value="0" width={size} click={clickHandler} />
          <Button value="." click={clickHandler} />
          <Button value="=" color={backround} click={clickHandler} />
        </div>
      </div>
    );
  }
}

export default Calculator;
