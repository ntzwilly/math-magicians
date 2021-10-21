import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onClickHandler = this.onClickHandler.bind(this);
    this.displayResult = this.displayResult.bind(this);
  }

  onClickHandler = (event) => {
    this.setState((prevState) => calculate(prevState, event.target.value));
  }

  displayResult = () => {
    const { total, next, operation } = this.state;
    const display = (total || '') + (operation || '') + (next || '');

    return display || '0';
  };

  render() {
    return (
      <div className="container">
        <div className="result">
          <span>{this.displayResult()}</span>
        </div>
        <div className="elements">
          <button type="button" className="number" onClick={this.onClickHandler} value="AC">AC</button>
          <button type="button" className="number" onClick={this.onClickHandler} value="+/-">+/-</button>
          <button type="button" className="number" onClick={this.onClickHandler} value="%">%</button>
          <button type="button" className="operator" onClick={this.onClickHandler} value="÷">÷</button>
          <button type="button" className="number" onClick={this.onClickHandler} value="7">7</button>
          <button type="button" className="number" onClick={this.onClickHandler} value="8">8</button>
          <button type="button" className="number" onClick={this.onClickHandler} value="9">9</button>
          <button type="button" className="operator" onClick={this.onClickHandler} value="x">x</button>
          <button type="button" className="number" onClick={this.onClickHandler} value="4">4</button>
          <button type="button" className="number" onClick={this.onClickHandler} value="5">5</button>
          <button type="button" className="number" onClick={this.onClickHandler} value="6">6</button>
          <button type="button" className="operator" onClick={this.onClickHandler} value="-">-</button>
          <button type="button" className="number" onClick={this.onClickHandler} value="1">1</button>
          <button type="button" className="number" onClick={this.onClickHandler} value="2">2</button>
          <button type="button" className="number" onClick={this.onClickHandler} value="3">3</button>
          <button type="button" className="operator" onClick={this.onClickHandler} value="+">+</button>
          <button type="button" className="number btn-0" onClick={this.onClickHandler} value="0">0</button>
          <button type="button" className="number" onClick={this.onClickHandler} value=".">.</button>
          <button type="button" className="operator" onClick={this.onClickHandler} value="=">=</button>
        </div>
      </div>
    );
  }
}
