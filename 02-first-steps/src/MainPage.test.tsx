import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { MainPage } from "./MainPage";

// vi.fn() => Función ficticia
const mockItemCounter = vi.fn((props: unknown) => {
  // console.log(props); // {productName, quantity}

  return <div data-testid="ItemCounter" />
});

// MOCK COMPONENT
vi.mock('./shopping-cart/ItemCounter', () => ({
  ItemCounter: (props: unknown) => mockItemCounter(props)
}));

// MOCK COMPONENT
// Esto hace que cada vez que se intente llamar ItemCounter, se retorne este módulo
// vi.mock('./shopping-cart/ItemCounter', () => {
//   // Retornando un objeto con nombre ItemCounter, para que MainPage pueda desestructurarlo como: import { ItemCounter }
//   return ({
//     ItemCounter: () => <div data-testid="ItemCounter" />,
//   });
// });


describe('MainPage', () => {
  // Despúes de cada prueba ejecutar este código
  afterEach(() => {
    // Limpiando el state de los Mocks después de cada test
    vi.clearAllMocks();
  })


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
  });

  test('should render ItemCounter with correct props', () => {
    const passedProps = [
      { productName: 'Nintentdo Switch 2', quantity: 10 },
      { productName: 'PlayStation 5', quantity: 4 },
      { productName: 'Xbox One', quantity: 2 },
    ]
    render(<MainPage />);

    // Detectará que sólo se llamó 3 veces, gracias al vi.clearAllMocks()
    expect(mockItemCounter).toHaveBeenCalledTimes(3);

    // Validando que se le hayan pasado atributos en específico a los componentes
    passedProps.forEach(prop => {
      expect(mockItemCounter).toHaveBeenCalledWith(prop);
    })
  })
})