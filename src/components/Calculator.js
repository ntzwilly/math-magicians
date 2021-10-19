/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class Calculator extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="result">
          <span>0</span>
        </div>
        <div className="elements">
          <button type="button" className="number">AC</button>
          <button type="button" className="number">+/-</button>
          <button type="button" className="number">%</button>
          <button type="button" className="operator">÷</button>
          <button type="button" className="number">7</button>
          <button type="button" className="number">8</button>
          <button type="button" className="number">9</button>
          <button type="button" className="operator">x</button>
          <button type="button" className="number">4</button>
          <button type="button" className="number">5</button>
          <button type="button" className="number">6</button>
          <button type="button" className="operator">-</button>
          <button type="button" className="number">1</button>
          <button type="button" className="number">2</button>
          <button type="button" className="number">3</button>
          <button type="button" className="operator">+</button>
          <button type="button" className="number btn-0">0</button>
          <button type="button" className="number">.</button>
          <button type="button" className="operator">=</button>
        </div>
      </div>
    );
  }
}
