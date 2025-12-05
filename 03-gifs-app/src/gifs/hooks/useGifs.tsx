import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQueryAction } from "../actions/get-gifs-by-query.action";

// Record: key: string, value: Gif[]
// We are taking out the cache from the hook state, so it doesn't reset on each hook call
// (This reset happens when the component using the hook re-renders)
const gifsCache: Record<string, Gif[]> = {};


export const useGifs = () => {

  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = async (term: string) => {
    if (gifsCache[term]) {
      setGifs(gifsCache[term]);
      return;
    }

    const gifs: Gif[] = await getGifsByQueryAction(term);
    setGifs(gifs);
  }

  const handleSearch = async (query: string) => {
    const formattedQuery = query.trim().toLowerCase();

    if (formattedQuery === '') return;
    if (previousTerms.includes(formattedQuery)) return;

    setPreviousTerms(actualTerms => {
      // Deleting the oldest term from cache if we were to exceed 8 terms
      if (actualTerms.length == 8) {
        const termToDelete = actualTerms[actualTerms.length - 1];
        delete gifsCache[termToDelete];
      }

      // Restricting previousTerms.length to 8 elements
      return [formattedQuery, ...actualTerms.splice(0, 7)]
    });

    const gifs: Gif[] = await getGifsByQueryAction(formattedQuery);
    setGifs(gifs);

    // Caching the results
    gifsCache[formattedQuery] = gifs;
    console.log({ gifsCache });
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