import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";

describe('SearchBar', () => {

  test('should render SearchBar correctly', () => {
    const { container } = render(<SearchBar onQuery={() => { }} />);

    expect(container).toMatchSnapshot();
  });

  test('should call onQuery with the correct value after 800ms', async () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole('textbox');

    // Triggering onChange / Sending 'test' within event.target.value
    fireEvent.change(input, { target: { value: 'test' } });

    // At this point, the timeout is being executed

    // Waiting for the timeout to end
    await waitFor(() => {
      expect(onQuery).toHaveBeenCalled();
      expect(onQuery).toHaveBeenCalledWith('test');
    });
  });

  test('should call only once with the last value (debounce)', async () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole('textbox');

    // Triggering onChange / Sending 'test' within event.target.value
    fireEvent.change(input, { target: { value: 't' } });
    fireEvent.change(input, { target: { value: 'te' } });
    fireEvent.change(input, { target: { value: 'tes' } });
    fireEvent.change(input, { target: { value: 'test' } });

    // Waiting for the timeout to end
    await waitFor(() => {
      expect(onQuery).toHaveBeenCalledExactlyOnceWith('test');
    });
  });

  test('should call onQuery when button clicked with the input value', () => {
    const onQuery = vi.fn();
    render(<SearchBar onQuery={onQuery} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onQuery).toHaveBeenCalled();
    expect(onQuery).toHaveBeenCalledWith('test');
  });

});
