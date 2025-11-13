import { describe, expect, test } from 'vitest'
import { add, multiply, subtract } from './math.helper'

// describe > agrupación de pruebas similares entre sí
describe('add', () => {
  // Si la prueba no choca con una excepción, se considera como exitosa
  test('should add two positive numbers', () => {
    // 1. Arrange
    const a = 1;
    const b = 2;

    // 2. Act
    const result = add(a, b);

    // 3. Assert
    expect(result).toBe(a + b);

  })

  test('should add two negative numbers', () => {
    const a = -1;
    const b = -2;

    expect(add(a, b)).toBe(a + b);
  })
})

describe('subtract', () => {
  test('should subtract two positive numbers', () => {
    const a = 1;
    const b = 2;

    expect(subtract(a, b)).toBe(a - b);
  })

  test('should subtract two negative numbers', () => {
    const a = -1;
    const b = -2;

    expect(subtract(a, b)).toBe(a - b);
  })
})

describe('multiply', () => {
  test('should multiply two positive numbers', () => {
    const a = 1;
    const b = 2;

    expect(multiply(a, b)).toBe(a * b);
  })

  test('should multiply two negative numbers', () => {
    const a = -1;
    const b = -2;

    expect(multiply(a, b)).toBe(a * b);
  })
})