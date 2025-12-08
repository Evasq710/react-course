import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useGifs } from "./useGifs";

describe('useGifs', () => {

  test('should return default values and methods', () => {
    // Un Hook sólo se puede renderizar dentro de un component o de otro hook
    const { result } = renderHook(() => useGifs());

    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousTerms.length).toBe(0);
    expect(result.current.handleSearch).toBeDefined();
    expect(result.current.handleTermClicked).toBeDefined();
  });

  test('should return a list of gifs', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleSearch('batman');
    });

    expect(result.current.gifs.length).toBe(10);
  });

  test('should return a list of gifs when handleTermClicked is called', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClicked('batman');
    });

    expect(result.current.gifs.length).toBe(10);
  });

});
