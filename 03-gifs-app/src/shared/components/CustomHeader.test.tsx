import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { CustomHeader } from "./CustomHeader";

describe("CustomHeader", () => {

  const title = 'Test Title';
  const description = 'Test Description';

  // REMAINDER:
  // CONTAINER es un elemento HTML estático del renderizado inicial, mientras que 
  // SCREEN siempre apunta al estado actual del DOM y se actualiza después de los eventos

  test('should render the title correctly', () => {
    const { container } = render(<CustomHeader title={title} />);

    const h1Title = container.querySelector('h1');

    expect(h1Title?.innerHTML).toBe(title);
  });

  test('should render the description provided', () => {
    render(<CustomHeader title={title} description={description} />);

    // Another way of testing components rendering, by content, insted of HTML tags
    expect(screen.getByText(description)).toBeDefined();
    expect(screen.getByRole('paragraph')).toBeDefined();
    expect(screen.getByRole('paragraph')?.innerHTML).toBe(description);
  });

  test('should not render description when not provided', () => {
    const { container } = render(<CustomHeader title={title} />);

    expect(container.querySelector('h1')?.innerHTML).toBe(title);
    // We can't test the non-existence of an element with screen
    expect(container.querySelector('p')).toBeNull();
  });

})