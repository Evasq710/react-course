import { useCounter } from "../hooks/useCounter"
import { usePokemon } from "../hooks/usePokemon";

export const PokemonPage = () => {

  // Custom hook responsible only of changing the value of the counter
  const { counter, increment, decrement } = useCounter();
  // Custom hook that will make an API call, whenever the counter changes, and will return the pokemon information
  const { pokemon, isLoading, formattedId } = usePokemon({ id: counter });

  if (isLoading) {
    return (
      <div className="bg-gradient flex flex-col items-center">
        <h1 className="text-2x1 font-thin text-white">Pokémon</h1>
        <h3 className="text-x1 font-bold text-white">#{formattedId} Cargando...</h3>
      </div>
    )
  }

  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2x1 font-thin text-white">Pokémon</h1>
      {
        pokemon ?
          <h3 className="text-x1 font-bold text-white">#{formattedId} {pokemon.name}</h3> :
          <h3 className="text-x1 font-bold text-white">No encontrado</h3>
      }
      {
        pokemon ?
          <img src={pokemon.imageUrl} alt={pokemon.name} /> :
          <h3 className="text-x1 font-bold text-white">#{formattedId} ???</h3>
      }


      <div className="flex gap-2 py-4">
        <button
          onClick={decrement}
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Anterior
        </button>
        <button
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}