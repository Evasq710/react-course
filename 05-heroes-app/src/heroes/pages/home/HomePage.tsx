import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useState } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"

export const HomePage = () => {

  const [activeTab, setActiveTab] = useState<
    'all'
    | 'favorites'
    | 'heroes'
    | 'villains'>('all');

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Universo de Superhéroes"
          description="Descubre, explora y gestiona tu colección de personajes favoritos"
        />

        <CustomBreadcrumbs
          currentPage="Super Héroes"
        />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab('all')}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger value="favorites" onClick={() => setActiveTab('favorites')} className="flex items-center gap-2" >
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger value="villains" onClick={() => setActiveTab('villains')}>
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* Mostrar todos los personajes */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="favorites">
            <h1>Favoritos</h1>
            {/* Mostrar todos los personajes favoritos */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="heroes">
            <h1>Héroes</h1>
            {/* Mostrar todos los héroes */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="villains">
            <h1>Villanos</h1>
            {/* Mostrar todos los villanos */}
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination
          totalPages={5}
        />
      </>
    </ >
  )
}