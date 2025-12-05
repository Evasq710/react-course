import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";
import { fireEvent, render, screen } from "@testing-library/react";

describe("MyCounterApp", () => {

  const initialValue = 5;

  test('should render the component', () => {
    render(<MyCounterApp />);

    expect(screen.getByRole('heading', { level: 1 })?.innerHTML).toContain(`counter: ${initialValue}`);

    expect(screen.getByRole('button', { name: '+1' })).toBeDefined();
    expect(screen.getByRole('button', { name: '-1' })).toBeDefined();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeDefined();
  });

  test('should increment the counter', () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole('heading', { level: 1 });
    const plusButton = screen.getByRole('button', { name: '+1' });

    fireEvent.click(plusButton);

    expect(labelH1.innerHTML).toContain(`counter: ${initialValue + 1}`);
  });

  test('should decrement the counter', () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole('heading', { level: 1 });
    const minusButton = screen.getByRole('button', { name: '-1' });

    fireEvent.click(minusButton);

    expect(labelH1.innerHTML).toContain(`counter: ${initialValue - 1}`);
  });

  test('should reset the counter', () => {
    render(<MyCounterApp />);

    const labelH1 = screen.getByRole('heading', { level: 1 });
    const minusButton = screen.getByRole('button', { name: '-1' });
    const resetButton = screen.getByRole('button', { name: 'Reset' });

    fireEvent.click(minusButton);
    fireEvent.click(minusButton);
    expect(labelH1.innerHTML).toContain(`counter: ${initialValue - 2}`);

    fireEvent.click(resetButton);
    expect(labelH1.innerHTML).toContain(`counter: ${initialValue}`);
  });

});