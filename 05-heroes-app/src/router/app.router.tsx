import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { HomePage } from "../heroes/pages/home/HomePage";
import { createBrowserRouter } from "react-router";
import { AdminPage } from "@/admin/pages/AdminPage";
import { SearchPage } from "@/heroes/pages/search/SearchPage";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { AdminLayout } from "@/admin/layouts/AdminLayout";


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />,
    children: [
      {
        // Default path (/)
        index: true,
        element: <HomePage />,
      },
      {
        path: "heroes/1",
        element: <HeroPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        // Default path (/admin)
        index: true,
        element: <AdminPage />,
      },
    ]
  },
])