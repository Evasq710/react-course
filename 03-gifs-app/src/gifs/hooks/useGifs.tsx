import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQueryAction } from "../actions/get-gifs-by-query.action";

export const useGifs = () => {

  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = async (term: string) => {
    const gifs: Gif[] = await getGifsByQueryAction(term);
    setGifs(gifs);
  }

  const handleSearch = async (query: string) => {
    const formattedQuery = query.trim().toLowerCase();

    if (formattedQuery === '') return;
    if (previousTerms.includes(formattedQuery)) return;

    setPreviousTerms(actualTerms => {
      // Restricting previousTerms.length to 8 elements
      return [formattedQuery, ...actualTerms.splice(0, 7)]
    });

    const gifs: Gif[] = await getGifsByQueryAction(formattedQuery);
    setGifs(gifs);
  }

  return {
    // Properties
    gifs,
    previousTerms,
    // Methods / Actions
    handleTermClicked,
    handleSearch
  }
}