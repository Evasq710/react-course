import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import * as gifActions from "../actions/get-gifs-by-query.action";

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

  test('should return a list of gifs from cache', async () => {
    const { result } = renderHook(() => useGifs());

    await act(async () => {
      await result.current.handleTermClicked('batman');
    });

    expect(result.current.gifs.length).toBe(10);

    const actionMock = vi.spyOn(gifActions, 'getGifsByQueryAction')
      .mockRejectedValue(new Error('This is my custom error'));

    await act(async () => {
      await result.current.handleTermClicked('batman');
    });

    expect(result.current.gifs.length).toBe(10);
    expect(actionMock).not.toHaveBeenCalled();
  });

});
