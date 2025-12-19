import { UserContext } from "@/09-useContext/context/UserContext";
import { Button } from "@/components/ui/button"
import { use } from "react"

export const ProfilePage = () => {

  /**
   * Reac API - use
   * Allow us to read a resource value (like a Promise or context), suspending the creation 
   * until getting to a resolution.
   * In this cases, is recommended by React to use 'use' instead of the hook 'useContext'
   */
  const { user } = use(UserContext);

  return (
    <div className="flex flex-col items-center justify-center min-h-scree">
      <h1 className="text-4xl">Perfil del usuario</h1>
      <hr />

      <pre className="my-4">
        {JSON.stringify(user, null, 2)}
      </pre>

      <Button variant="destructive">Salir</Button>
    </div >
  )
}