import { beforeEach, describe, expect, test, vi } from "vitest";
import { getGifsByQueryAction } from "./get-gifs-by-query.action";
import AxiosMockAdapter from 'axios-mock-adapter';
import { giphyApi } from "../api/giphy.api";
import { giphySearchResponseMock } from "../../mock-data/giphy.response.data";

describe("getGifsByQuery", () => {

  const axiosMock = new AxiosMockAdapter(giphyApi);

  beforeEach(() => {
    // Reset any previous handlers
    // This is necessary, because we are using the same axiosMock instance in multiple tests
    axiosMock.reset();
  });

  test('should return a list of gifs', async () => {
    // Overriding the default axios instance behavior
    // When a GET request is made to '/search', respond with status 200 and the mock data
    axiosMock.onGet('/search').reply(200, giphySearchResponseMock);

    // This won't make an actual HTTP request thanks to AxiosMockAdapter
    const gifs = await getGifsByQueryAction('batman');

    expect(gifs.length).toBe(giphySearchResponseMock.data.length);

    gifs.forEach(gif => {
      expect(gif).toStrictEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String),
        width: expect.any(Number),
        height: expect.any(Number),
      })
    })
  });

  test('should return an empty list if query is empty', async () => {
    const gifs = await getGifsByQueryAction('');

    expect(gifs.length).toBe(0);
  });

  test('should handle error when the API returns an error', async () => {
    // Replacing console.error with a dummy function
    const consoleErrorSpy = vi.spyOn(console, 'error')
      .mockImplementation(() => { })

    axiosMock.onGet('/search').reply(400, {
      data: {
        message: 'Bad request'
      }
    });

    const gifs = await getGifsByQueryAction('batman');

    expect(gifs.length).toBe(0);
    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything());
  });

});