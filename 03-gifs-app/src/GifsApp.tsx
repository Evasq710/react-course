import { useState } from "react"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { CustomHeader } from "./shared/components/CustomHeader"
import { SearchBar } from "./shared/components/SearchBar"
import { getGifsByQueryAction } from "./gifs/actions/get-gifs-by-query.action"
import type { Gif } from "./gifs/interfaces/gif.interface"


export const GifsApp = () => {

  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
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

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de Gifs"
        description="Descubre y comparte el gif perfecto"
      />

      {/* Search */}
      <SearchBar
        placeholder="Busca lo que quieras"
        onQuery={handleSearch}
      />

      {/* Búsquedas previas */}
      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Listado de Gifs */}
      <GifList gifs={gifs} />
    </>
  )
}