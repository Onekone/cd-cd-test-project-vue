// src/sum.test.js
const sum = require('./sum');

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('negative numbers', () => {
    expect(sum(-5, 2)).toBe(-3);
    expect(sum(-5, -2)).toBe(-7);
  });

  test('floats', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 5);
  });

  test('big numbers', () => {
    expect(sum(1e9, 1e9)).toBe(2e9);
  });

  test('string + number coerces to string concat in JS', () => {
    expect(sum('1', 2)).toBe('12');
  });

  test('NaN when any arg is NaN', () => {
    expect(Number.isNaN(sum(NaN, 1))).toBe(true);
  });
});
