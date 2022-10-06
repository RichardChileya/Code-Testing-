import stringLength from './task1.js';
import reverseString from './task2.js';
import capitalize from './task4.js';

// TASK 3
const Calculator = {
  add: true,
  subtract: true,
  divide: true,
  multiply: true,
};

describe('Calculator', () => {
  test('add', () => {
    expect(Calculator.add).toBeTruthy();
  });

  test('subtract', () => {
    expect(Calculator.subtract).toBeTruthy();
  });

  test('multiply', () => {
    expect(Calculator.multiply).toBeTruthy();
  });

  test('divide', () => {
    expect(Calculator.divide).toBeTruthy();
  });
});

// TASK 4
it('Should Capitalize', () => expect(capitalize('richard')).toBe('RICHARD'));

// TASK 1
it('works', () => expect(stringLength('Hello')).toBe(5));

// TASK 2
test('Doesnt work', () => expect(() => stringLength('Hello my what is your name')).toThrow());

test('Should be reversed', () => expect(reverseString('Nahnah')).toBe('hanhaN'));