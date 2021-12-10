import operate from '../../logic/operate';

describe('checking the operate function', () => {
  test('Add', () => {
    expect(operate(3, 2, '+')).toBe('5');
  });
  test('Subtract', () => {
    expect(operate(10, 2, '-')).toBe('8');
  });
  test('Multiply', () => {
    expect(operate(10, 2, 'x')).toBe('20');
  });
  test('Divide', () => {
    expect(operate(10, 2, '÷')).toBe('5');
  });
  test('Modulus', () => {
    expect(operate(2, 10, '%')).toBe('2');
  });
});
