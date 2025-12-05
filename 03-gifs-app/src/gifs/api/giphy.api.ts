import axios, { type AxiosInstance } from "axios";


export const giphyApi: AxiosInstance = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    // Will be transformed to QUERY parameters
    lang: 'es',
    api_key: import.meta.env.VITE_GIPHY_API_KEY
  }
});