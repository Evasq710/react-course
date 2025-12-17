import { useEffect, useState } from "react"
import { getUserAction, type User } from "./api/get-user.action"


interface Props {
  id: number;
}


export const ClientInformation = ({ id }: Props) => {

  const [user, setUser] = useState<User>();

  /**
   * WHY DIRECT ASYNC FUNCTIONS DON'T WOKR? useEffect(async () => {...})
   * The primary issue is the return value of an async function.
   * - React expects the function passed to useEffect to return either void (nothing) or a synchronous cleanup function
   * - An async function, by definition, always returns a Promise, even if it doesn't explicitly return a value
   */
  useEffect(() => {
    getUserAction(id)
      .then(user => setUser(user));
  }, [id]);

  if (!user) {
    return (
      <div className="bg-gradient flex flex-col gap-4">
        <h2 className="text-4xl font-thin text-white">
          Cargando...
        </h2>
      </div>
    )
  }

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h2 className="text-4xl font-thin text-white">
        {user?.name} - {user?.id}
      </h2>

      <p className="text-white text-2xl">{user?.location}</p>
      <p className="text-white text-xl">{user?.role}</p>
    </div>
  )
}