import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";

export const SearchPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Búsqueda de Superhéroes"
        description="Descubre, explora y gestiona tu colección de personajes favoritos"
      />

      {/* Stats Dashboard */}
      <HeroStats />
    </>
  )
};

// Default export for lazy loading
export default SearchPage;