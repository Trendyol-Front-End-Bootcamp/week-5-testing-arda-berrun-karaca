import { divideByTwoNumbers, toPascalCase } from '../../src/functions';

describe('divideByTwoNumbers Function Tests', () => {
  it('should return the division of two integers', () => {
    const dividend = 10;
    const divisor = 5;

    const result = 2;

    expect(divideByTwoNumbers(dividend, divisor)).toBe(result);
  });

  it('should return the division of contains floating number', () => {
    const dividend = 0.9;
    const divisor = 3;

    expect(divideByTwoNumbers(dividend, divisor)).toBeCloseTo(0.3);
  });

  it('should throw error when dividend is not a number', () => {
    expect(() => divideByTwoNumbers('NaN', 12)).toThrow('Invalid argument');
  });

  it('should throw error when divisor is not a number', () => {
    expect(() => divideByTwoNumbers(8, 'NaN')).toThrow('Invalid argument');
  });

  it('should throw error when divisor is zero', () => {
    expect(() => divideByTwoNumbers(10, 0)).toThrow('Divide by zero');
  });
});

describe('toPascalCase Function Tests', () => {
  it('should make uppercase first letter of given word', () => {
    expect(toPascalCase('hello')).toBe('Hello');
  });

  it('should return the empty string as an empty string', () => {
    expect(toPascalCase('')).toBe('');
  });

  it('should return capitalize the first letter of all words of the sentence', () => {
    expect(toPascalCase('hello world my name is arda')).toBe(
      'Hello World My Name Is Arda'
    );
  });

  it('should return write all letters of the sentence in lowercase except the first letter', () => {
    expect(toPascalCase('hElLo WORLD mY nAmE iS arDa')).toBe(
      'Hello World My Name Is Arda'
    );
  });

  it('should throw an error when the type of the argument is not string.', () => {
    expect(() => toPascalCase(10)).toThrow(
      'The argument must be of type string'
    );
  });
});
