import { Link, Outlet } from "react-router"

export const HeroesLayout = () => {
  return (
    <div className="bg-red-100">

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/heroes/1">Heroes</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>

      <section className="mt-5">
        {/* Renders the matching child route of a parent route or nothing if no child route matches. */}
        <Outlet />
      </section>
    </div>
  )
}
