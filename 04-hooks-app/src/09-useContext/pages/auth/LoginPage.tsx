import { UserContext } from "@/09-useContext/context/UserContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"

export const LoginPage = () => {

  /**
   * useContext
   * Accepts a context object (the value returned from React.createContext) and returns
   * the current context value, as given by the nearest context provider for the given context.
   */
  const { login } = useContext(UserContext);
  const [userId, setUserId] = useState('');

  /**
   * useNavigate(): NavigateFunction
   * Returns a function that lets you navigate programmatically in the browser in response
   * to user interactions or effects.
   * It's often better to use redirect in action/loader functions than this hook.
   */
  const navigation = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userId === '') return;

    const result = login(+userId); // + for casting string to int

    if (!result) {
      toast.error('Usuario no encontrado');
      return;
    }

    navigation('/profile');
  }

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">Iniciar Sesión</h1>
      <hr />

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 my-10"
      >
        <Input
          value={userId}
          onChange={e => setUserId(e.target.value)}
          type="number"
          placeholder="ID del usuario"
        />
        <Button type="submit">Login</Button>
      </form>

      <Link to="/about">
        <Button variant="ghost">Volver a la página principal</Button>
      </Link>
    </div>
  )
}