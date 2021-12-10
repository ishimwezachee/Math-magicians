import calculate from '../../logic/calculate';

describe('Operation and expected result', () => {
  test('Addition', () => {
    const start = { total: '5', next: '2', operation: '+' };
    const result = calculate(start, start.operation);
    expect(result.total).toBe('7');
  });

  test('Subtraction', () => {
    const start = { total: '10', next: '2', operation: '-' };
    const result = calculate(start, start.operation);
    expect(result.total).toBe('8');
  });

  test('Multiplication', () => {
    const start = { total: '6', next: '3', operation: 'x' };
    const result = calculate(start, start.operation);
    expect(result.total).toBe('18');
  });

  test('Division', () => {
    const start = { total: '60', next: '30', operation: '÷' };
    const result = calculate(start, start.operation);
    expect(result.total).toBe('2');
  });

  test('Modulus', () => {
    const start = { total: '60', next: '30', operation: '%' };
    const result = calculate(start, start.operation);
    expect(result.total).toBe('0');
  });
});
