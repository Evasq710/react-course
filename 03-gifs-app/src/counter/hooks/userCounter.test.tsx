import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";


describe('userCounter', () => {

  const defaultValue = 10; // Hook's default
  const initialValue = 20;

  test(`should initialize with default value of ${defaultValue}`, () => {
    // Un Hook sólo se puede renderizar dentro de un component o de otro hook
    // Es por eso que necesitamos usar renderHook
    const { result } = renderHook(() => useCounter());

    expect(result.current.counter).toBe(defaultValue);
  })

  test(`should be initialized with value ${initialValue}`, () => {
    const { result } = renderHook(() => useCounter(initialValue));

    expect(result.current.counter).toBe(initialValue);
  });

  test('should increment counter when handleAdd is called', () => {
    const { result } = renderHook(() => useCounter(initialValue));

    /**
     * When testing, code that causes React state updates should be wrapped into act(...):
        act(() => {
          // fire events that update state 
        });
        // assert on the output 
     * This ensures that you're testing the behavior the user would see in the browser.
     */
    act(() => {
      result.current.handleAdd();
    });

    expect(result.current.counter).toBe(initialValue + 1);
  });

  test('should decrement counter when handleSubtract is called', () => {
    const { result } = renderHook(() => useCounter(initialValue));

    act(() => {
      result.current.handleSubtract();
    });

    expect(result.current.counter).toBe(initialValue - 1);
  });

  test('should reset counter to initial value when handleReset is called', () => {
    const { result } = renderHook(() => useCounter(initialValue));

    act(() => {
      result.current.handleSubtract();
      result.current.handleSubtract();
      result.current.handleSubtract();
    });
    expect(result.current.counter).toBe(initialValue - 3);

    act(() => {
      result.current.handleReset();
    })
    expect(result.current.counter).toBe(initialValue);
  });

})
