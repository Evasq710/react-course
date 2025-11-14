import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MainPage } from "./MainPage";


// MOCK COMPONENT
// Esto hace que cada vez que se intente llamar ItemCounter, se retorne este módulo
vi.mock('./shopping-cart/ItemCounter', () => {
  // Retornando un objeto con nombre ItemCounter, para que MainPage pueda desestructurarlo como: import { ItemCounter }
  return ({
    ItemCounter: () => <div data-testid="ItemCounter" />,
  });
});


describe('MainPage', () => {
  test('should match snapshot', () => {
    const { container } = render(<MainPage />);

    expect(container).toMatchSnapshot();
  });

  /** MOCK COMPONENTS */
  test('should render the correct number of ItemCounter components', () => {
    render(<MainPage />);

    // para observar que, en lugar de los ItemCounter, se renderizaron div's (por el Mock)
    // screen.debug(); 

    const ItemCounters = screen.getAllByTestId('ItemCounter');

    expect(ItemCounters.length).toBe(3);
  })
})