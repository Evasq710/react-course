import { CustomMenu } from "@/components/custom/CustomMenu"
import { Outlet } from "react-router"

export const HeroesLayout = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto p-6">

        <CustomMenu />

        {/* Renders  the matching child route of a parent route or nothing if no child route matches */}
        <Outlet />
      </div>
    </div>
  )
}
