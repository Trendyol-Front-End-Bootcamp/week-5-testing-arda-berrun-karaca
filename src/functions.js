export const divideByTwoNumbers = (dividend, divisor) => {
  if (isNaN(dividend) || isNaN(divisor)) {
      throw new Error('Invalid argument');
  }

  if (divisor == 0) {
      throw new Error('Divide by zero');
  }

  return dividend / divisor;
};

export const toPascalCase = (word) => {
    if(typeof word !== 'string') {
        throw new Error('The argument must be of type string');
    }

    return word.split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase())
        .join(' ');
};
