import calculate from '../logic/calculate';

describe('logic/Calculate.js ', () => {
  test('should return an object', () => {
    expect(calculate({}, '1')).toBeInstanceOf(Object);
  });
  test('should return an object', () => {
    expect(calculate({}, '1')).toEqual({ next: '1', total: null });
  });
  test('should be able to add number to existing number(next)', () => {
    expect(calculate({ next: '2' }, '1')).toEqual({ next: '21', total: null });
  });
  test('should be able to add two numbers to gether(2+1)', () => {
    expect(calculate({ next: '2', total: '1', operation: '+' }, '=')).toEqual({
      total: '3',
      next: null,
      operation: null,
    });
  });
  test('should be able to subtract two numbers from each other(10-2)', () => {
    expect(calculate({ next: '2', total: '10', operation: '-' }, '=')).toEqual({
      total: '8',
      next: null,
      operation: null,
    });
  });
  test('should be able to multiply two numbers (10 X 2)', () => {
    expect(calculate({ next: '2', total: '10', operation: 'x' }, '=')).toEqual({
      total: '20',
      next: null,
      operation: null,
    });
  });
  test('should be able to divide two numbers (10 ÷ 2)', () => {
    expect(
      calculate({ next: '2', total: '10', operation: '÷' }, '='),
    ).toEqual({
      total: '5',
      next: null,
      operation: null,
    });
  });
  test('should be able to reset to null (AC)', () => {
    expect(calculate({ next: '2', total: '2' }, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
  test('should be able to reverse the numbers sign(+/-)', () => {
    expect(calculate({ next: '2', total: '2' }, '+/-')).toEqual({
      next: '-2',
      total: '2',
    });
  });
  test('should be able to add point(dot) infront of a number', () => {
    expect(calculate({ next: '2', total: '2' }, '.')).toEqual({
      next: '2.',
      total: '2',
    });
  });
});
