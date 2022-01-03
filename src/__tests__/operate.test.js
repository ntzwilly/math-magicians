import operate from '../logic/operate';

describe('Known operations to pass the tests', () => {
  test('operate(2,3,+) should return "5" as string', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  test('operate(2,3,-) should return "-1" as string', () => {
    expect(operate(2, 3, '-')).toBe('-1');
  });

  test('operate(2,3,x) should return "6" as string', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });

  test('operate(6,3,÷) should return "2" as string', () => {
    expect(operate(6, 3, '÷')).toBe('2');
  });

  test('operate(12,3,%) should return "0" as string', () => {
    expect(operate(12, 3, '%')).toBe('0');
  });
});

describe('Unknown operations to throw error', () => {
  it('should throw an error when unvalid operation is given', () => {
    expect(() => {
      operate(1, 2, '2');
    }).toThrow();
  });

  it('should throw `Unknown operation <wrong-operation>` ', () => {
    expect(() => {
      operate(1, 2, '2');
    }).toThrowError(new Error("Unknown operation '2'"));
  });
});
