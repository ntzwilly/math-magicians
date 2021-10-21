import React, { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [state, setState] = useState({});

  const onClickHandler = (event) => {
    setState((prevState) => calculate(prevState, event.target.value));
  };

  const displayResult = () => {
    const { total, next, operation } = state;
    const display = (total || '') + (operation || '') + (next || '');

    return display || '0';
  };

  return (
    <div className="container">
      <div className="result">
        <span>{displayResult()}</span>
      </div>
      <div className="elements">
        <button type="button" className="number" onClick={onClickHandler} value="AC">AC</button>
        <button type="button" className="number" onClick={onClickHandler} value="+/-">+/-</button>
        <button type="button" className="number" onClick={onClickHandler} value="%">%</button>
        <button type="button" className="operator" onClick={onClickHandler} value="÷">÷</button>
        <button type="button" className="number" onClick={onClickHandler} value="7">7</button>
        <button type="button" className="number" onClick={onClickHandler} value="8">8</button>
        <button type="button" className="number" onClick={onClickHandler} value="9">9</button>
        <button type="button" className="operator" onClick={onClickHandler} value="x">x</button>
        <button type="button" className="number" onClick={onClickHandler} value="4">4</button>
        <button type="button" className="number" onClick={onClickHandler} value="5">5</button>
        <button type="button" className="number" onClick={onClickHandler} value="6">6</button>
        <button type="button" className="operator" onClick={onClickHandler} value="-">-</button>
        <button type="button" className="number" onClick={onClickHandler} value="1">1</button>
        <button type="button" className="number" onClick={onClickHandler} value="2">2</button>
        <button type="button" className="number" onClick={onClickHandler} value="3">3</button>
        <button type="button" className="operator" onClick={onClickHandler} value="+">+</button>
        <button type="button" className="number btn-0" onClick={onClickHandler} value="0">0</button>
        <button type="button" className="number" onClick={onClickHandler} value=".">.</button>
        <button type="button" className="operator" onClick={onClickHandler} value="=">=</button>
      </div>
      <div className="elements">
        <button type="button" className="number" onClick={onClickHandler} value="AC">AC</button>
        <button type="button" className="number" onClick={onClickHandler} value="+/-">+/-</button>
        <button type="button" className="number" onClick={onClickHandler} value="%">%</button>
        <button type="button" className="operator" onClick={onClickHandler} value="÷">÷</button>
        <button type="button" className="number" onClick={onClickHandler} value="7">7</button>
        <button type="button" className="number" onClick={onClickHandler} value="8">8</button>
        <button type="button" className="number" onClick={onClickHandler} value="9">9</button>
        <button type="button" className="operator" onClick={onClickHandler} value="x">x</button>
        <button type="button" className="number" onClick={onClickHandler} value="4">4</button>
        <button type="button" className="number" onClick={onClickHandler} value="5">5</button>
        <button type="button" className="number" onClick={onClickHandler} value="6">6</button>
        <button type="button" className="operator" onClick={onClickHandler} value="-">-</button>
        <button type="button" className="number" onClick={onClickHandler} value="1">1</button>
        <button type="button" className="number" onClick={onClickHandler} value="2">2</button>
        <button type="button" className="number" onClick={onClickHandler} value="3">3</button>
        <button type="button" className="operator" onClick={onClickHandler} value="+">+</button>
        <button type="button" className="number btn-0" onClick={onClickHandler} value="0">0</button>
        <button type="button" className="number" onClick={onClickHandler} value=".">.</button>
        <button type="button" className="operator" onClick={onClickHandler} value="=">=</button>
      </div>
    </div>
  );
}
