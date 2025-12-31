import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export const SearchPage = () => {
  return (
    <>
      {/* Header */}
      <CustomJumbotron
        title="Búsqueda de Superhéroes"
        description="Descubre, explora y gestiona tu colección de personajes favoritos"
      />

      <CustomBreadcrumbs
        currentPage="Buscador de héroes"
        breadcrumbs={
          [
            // { label: 'Home1', to: '/1' },
            // { label: 'Home2', to: '/1/2' },
            // { label: 'Home3', to: '/1/2/3' },
          ]
        }
      />

      {/* Stats Dashboard */}
      <HeroStats />

      {/* Filter and search */}
      <SearchControls />
    </>
  )
};

// Default export for lazy loading
export default SearchPage;