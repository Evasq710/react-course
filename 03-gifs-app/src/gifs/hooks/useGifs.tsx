import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQueryAction } from "../actions/get-gifs-by-query.action";

/*
// A way to persist data between hook calls
// We are taking out the cache from the hook state, so it doesn't reset on each hook call
// (This reset happens when the component using the hook re-renders)
// Record: key: string, value: Gif[]
const gifsCache: Record<string, Gif[]> = {};
*/

export const useGifs = () => {

  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  // Another way to persist data between hook calls
  // useRef returns a mutable ref object whose .current property is initialized to the passed argument
  // The returned object will persist for the full lifetime of the hook and won't produce re-renders when its content changes
  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs: Gif[] = await getGifsByQueryAction(term);
    setGifs(gifs);

    // Caching the results
    gifsCache.current[term] = gifs;
  }

  const handleSearch = async (query: string) => {
    const formattedQuery = query.trim().toLowerCase();

    if (formattedQuery === '') return;

    // TODO: Is this return ok? 
    if (previousTerms.includes(formattedQuery)) return;

    setPreviousTerms(actualTerms => {
      // Deleting the oldest term from cache if we were to exceed 8 terms
      if (actualTerms.length == 8) {
        const termToDelete = actualTerms[actualTerms.length - 1];
        delete gifsCache.current[termToDelete];
      }

      // Restricting previousTerms.length to 8 elements
      return [formattedQuery, ...actualTerms.splice(0, 7)]
    });

    const gifs: Gif[] = await getGifsByQueryAction(formattedQuery);
    setGifs(gifs);

    // Caching the results
    gifsCache.current[formattedQuery] = gifs;
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