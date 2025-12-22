import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { HomePage } from "../heroes/pages/home/HomePage";
import { createBrowserRouter } from "react-router";
import { AdminPage } from "@/admin/pages/AdminPage";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { lazy } from "react";

// import { SearchPage } from "@/heroes/pages/search/SearchPage";

/**
 * LAZY LOADING WITH REACT
 * lazy: Lets you defer loading a component’s code until it is rendered for the first time.
 * 
 * @param load
 * A function that returns a Promise or another thenable (a Promise-like object with a then method).
 * React will not call load until the first time you attempt to render the returned component.
 * After React first calls load, it will wait for it to resolve, and then render the resolved
 * value’s .default as a React component.
 * Both the returned Promise and the Promise’s resolved value will be cached, so React will not call
 * load more than once. If the Promise rejects, React will throw the rejection reason for the nearest
 * Error Boundary to handle.
 */
const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"));


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