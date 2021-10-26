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

  const elements = [{ value: 'AC', className: 'number' },
    { value: '+/-', className: 'number' },
    { value: '%', className: 'number' },
    { value: '÷', className: 'operator' },
    { value: '7', className: 'number' },
    { value: '8', className: 'number' },
    { value: '9', className: 'number' },
    { value: 'x', className: 'operator' },
    { value: '4', className: 'number' },
    { value: '5', className: 'number' },
    { value: '6', className: 'number' },
    { value: '-', className: 'operator' },
    { value: '1', className: 'number' },
    { value: '2', className: 'number' },
    { value: '3', className: 'number' },
    { value: '+', className: 'operator' },
    { value: '0', className: 'number btn-0' },
    { value: '.', className: 'number' },
    { value: '=', className: 'operator' },
  ];

  return (
    <div className="calculator">
      <h2>Let&apos;s do some math!</h2>
      <div className="container">
        <div className="result">
          <span>{displayResult()}</span>
        </div>
        <div className="elements">
          { elements.map((element) => (
            <button key={element} type="button" className={element.className} value={element.value} onClick={onClickHandler}>{element.value}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
