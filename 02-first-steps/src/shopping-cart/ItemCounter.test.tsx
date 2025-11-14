import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";


describe('ItemCounter', () => {
  test('should render with default values', () => {

    const name = 'Test item';

    render(<ItemCounter productName={name} />); // no enviamos quantity
    // screen.debug();

    expect(screen.getByText(name)).toBeDefined();
    // expect(screen.getByText(name)).not.toBeUndefined();
    expect(screen.getByTestId("quantity-value")?.innerHTML).toEqual("1"); // valor por defecto
  });

  test('shoul render with custom quantity', () => {

    const name = 'Test item 2';
    const quantity = 10;

    render(<ItemCounter productName={name} quantity={quantity} />);
    // screen.debug();

    expect(screen.getByTestId("quantity-value")).toBeDefined();
  });

  test('should increase count when +1 button is pressed', () => {
    render(<ItemCounter productName="Test item" quantity={1} />);

    // Tomando todos los botones > desestructuración para sólo tomar el ADD
    const [, buttonAdd] = screen.getAllByRole('button');

    fireEvent.click(buttonAdd);

    expect(screen.getByTestId("quantity-value")?.innerHTML).toEqual("2");
  });

  test('should decrease count when -1 button is pressed', () => {
    render(<ItemCounter productName="Test item" quantity={2} />);

    // Tomando todos los botones > desestructuración para sólo tomar el SUBTRACT
    const [buttonSubtract] = screen.getAllByRole('button');

    fireEvent.click(buttonSubtract);

    expect(screen.getByTestId("quantity-value")?.innerHTML).toEqual("1");
  });

  test("shouldn't decrease count when -1 button is pressed and quantity is 1", () => {
    render(<ItemCounter productName="Test item" quantity={1} />);

    // Tomando todos los botones > desestructuración para sólo tomar el SUBTRACT
    const [buttonSubtract] = screen.getAllByRole('button');

    fireEvent.click(buttonSubtract);

    expect(screen.getByTestId("quantity-value")?.innerHTML).toEqual("1");
  });

  test('should change to red when count is 1', () => {
    const quantity = 1;
    const name = "Test item";
    render(<ItemCounter productName={name} quantity={quantity} />);

    const itemText = screen.getByText(name); // devuelve HTMLElement
    expect(itemText.style.color).toBe('red');
  });

  test('should change to black when count is greater than 1', () => {
    const quantity = 2;
    const name = "Test item";
    render(<ItemCounter productName={name} quantity={quantity} />);

    const itemText = screen.getByText(name); // devuelve HTMLElement
    expect(itemText.style.color).toBe('black');
  });
})