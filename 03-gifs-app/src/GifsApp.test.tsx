import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { GifsApp } from "./GifsApp";

describe("GifsApp", () => {
  test('should render component properly', () => {
    // CONTAINER es un elemento HTML estático del renderizado inicial, mientras que 
    // SCREEN siempre apunta al estado actual del DOM y se actualiza después de los eventos

    const { container } = render(<GifsApp />);

    // La primera vez que se ejecuta, se genera un snapshot del HTML en __snapshots__ con formato: <filename>.tsx.snap
    // Si cualquier cambio al componente hace que el DOM sea distinto al snapshot, fallará
    // Si se quiere actualizar el snapshot, se debe de presionar 'u' en la consola de `nmp run test`
    expect(container).toMatchSnapshot();
  });
});