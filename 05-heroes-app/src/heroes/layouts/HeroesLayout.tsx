import { Outlet } from "react-router"

export const HeroesLayout = () => {
  return (
    <div className="bg-red-500">
      {/* Renders the matching child route of a parent route or nothing if no child route matches. */}
      <Outlet />
    </div>
  )
}
