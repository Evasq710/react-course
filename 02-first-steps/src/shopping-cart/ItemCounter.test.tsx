import { render, screen } from "@testing-library/react";
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
  })

  test('shoul render with custom quantity', () => {

    const name = 'Test item 2';
    const quantity = 10;

    render(<ItemCounter productName={name} quantity={quantity} />);
    // screen.debug();

    expect(screen.getByTestId("quantity-value")).toBeDefined();
  })
})