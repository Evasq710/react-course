import { Link, useLocation } from "react-router"
import { cn } from "@/lib/utils";
import { NavigationMenuItem, NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";


export const CustomMenu = () => {

  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;

  return (
    <NavigationMenu>
      <NavigationMenuList>

        {/* Home */}
        <NavigationMenuItem>
          {/*
            Without `asChild`, we would have the following error:
            In HTML, <a> cannot be a descendant of <a>. This will cause a hydration error.
          */}
          <NavigationMenuLink asChild
            className={cn(isActive('/') && 'bg-slate-200', 'p-2 rounded-md')}
          >
            <Link to="/">Inicio</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Search */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild
            className={cn(isActive('/search') && 'bg-slate-200', 'p-2 rounded-md')}
          >
            <Link to="/search">Buscar superhéroes</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}
