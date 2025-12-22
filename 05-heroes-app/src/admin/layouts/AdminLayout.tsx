import { Outlet } from "react-router"

export const AdminLayout = () => {
  return (
    <div className="bg-cyan-500">
      <Outlet />
    </div>
  )
}
