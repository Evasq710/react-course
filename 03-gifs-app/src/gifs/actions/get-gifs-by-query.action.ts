import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";

export const getGifsByQueryAction = async (query: string): Promise<Gif[]> => {

  if (query.trim().length === 0) {
    return [];
  }

  try {
    /**
     * API Request to Giphy
     * giphyApi (an AxiosInstance instnace) already has baseURL and common params (lang, api_key)
     */
    const response = await giphyApi<GiphyResponse>('/search', {
      params: {
        // Will be transformed to QUERY parameters
        q: query,
        limit: 10
      }
    });

    /*
    // Alternative without giphyApi instance
    const response = await axios.get<GiphyResponse>('https://api.giphy.com/v1/gifs/search', {
      params: {
        q: query,
        limit: 10,
        lang: 'es',
        api_key: import.meta.env.VITE_GIPHY_API_KEY
      }
    });
    */

    /**
     * Transforming GiphyResponse to Gif[] (MAPPER)
    */
    return response.data.data.map(gif => ({
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
      width: Number(gif.images.original.width),
      height: Number(gif.images.original.height),
    }));
  } catch (error) {
    // This console.error is going to be tested
    console.error(error);
    return [];
  }
} 
