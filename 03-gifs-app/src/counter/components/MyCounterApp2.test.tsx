import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

// Mocking custom hook functions
// We are not going to test the functionality of the custom hook's functions. We are just interested if they are been called properly
// Useful if we don't want to perform the function's logic, like making http requests
const handleAddMock = vi.fn();
const handleSubtractMock = vi.fn();
const handleResetMock = vi.fn();

/**
 * MOCK OF CUSTOM HOOK
 * @param path — Path to the module. Can be aliased, if your Vitest config supports it
 * @param factory — Mocked module factory. The result of this function will be an exports object
 * 
 * useCounter: Export that is mocking our custom hook (it is a function that will return the mocked counter and handlers)
 */
vi.mock("../hooks/useCounter", () => ({
  useCounter: () => ({
    counter: 15,
    handleAdd: handleAddMock,
    handleSubtract: handleSubtractMock,
    handleReset: handleResetMock,
  })
})
);

describe('MyCounterApp', () => {

  test('should render the component', () => {
    render(<MyCounterApp />);

    expect(screen.getByRole('heading', { level: 1 })?.innerHTML).toContain(`counter: ${15}`);

    expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
    expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
  });

  test('should call handleAdd if button is clicked', () => {
    render(<MyCounterApp />);

    const plusButton = screen.getByRole('button', { name: '+1' });

    fireEvent.click(plusButton);

    // Just testing that the functions are being used properly
    expect(handleAddMock).toHaveBeenCalledOnce();
    expect(handleSubtractMock).not.toHaveBeenCalled();
    expect(handleResetMock).not.toHaveBeenCalled();
  });

});