import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react'
import { FirstStepsApp } from "./FirstStepsApp";


describe('FirstStepsApp', () => {

  test('should render firstName and lastName', () => {
    // Para que podamos acceder a este "test DOM", se debe configurar "vite.config.ts" con "jsdom" en environment
    const { container } = render(<FirstStepsApp />);
    // screen.debug();
    // console.log(container.innerHTML);

    // Regresa el primer elemento que encuentre
    const h2 = container.querySelector('h2');
    const h3 = container.querySelector('h3');

    expect(h2?.innerHTML).toContain('Elías');
    expect(h3?.innerHTML).toContain('Vasquez');

  });

  test('should render firstName and lastName - screen', () => {
    render(<FirstStepsApp />);
    // screen.debug();

    // Falla si encuentra múltiples elementos que cumplan con el criterio solicitado
    // const h2 = screen.getByRole('heading', {
    //   level: 2
    // })

    // Para que esto funcione, se debe indicar el test id del elemento con la propiedad data-testid
    const h2 = screen.getByTestId("first-name-title");

    expect(h2?.innerHTML).toContain('Elías');
  });

  test('should match snapshot', () => {

    const { container } = render(<FirstStepsApp />);

    // La primera vez que se ejecuta, se genera un snapshot del HTML en __snapshots__ con formato: <filename>.tsx.snap
    // Si cualquier cambio al componente hace que el DOM sea distinto al snapshot, fallará
    // Si se quiere actualizar el snapshot, se debe de presionar 'u' en la consola de `nmp run test`
    expect(container).toMatchSnapshot();

  })

  test('should match snapshot - screen', () => {

    render(<FirstStepsApp />);

    // De nuevo, depende de que el div padre tenga el test id "div-app"
    // No muy recomendado
    expect(screen.getByTestId('div-app')).toMatchSnapshot();

  })

});