import { createContext, useState, type Context, type PropsWithChildren } from "react"
import type { User } from "../data/user-mock.data";


type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
  // state
  authStatus: AuthStatus;
  user: User | null;

  // methods
  login: (userId: number) => boolean;
  logout: () => void;
}

/**
 * createContext: Lets you create a Context that components can provide or read.
 * @param defaultValue: The value you want the context to have when there is no matching Provider
 * in the tree above the component reading the context. This is meant as a "last resort" fallback.
 */
export const UserContext: Context<UserContextProps> = createContext({} as UserContextProps);

/**
 * HOC: Higher Order Component. A component that receives children.
 * Provider: HOC that provides some state or functionality to all of its children
 * 
 * @param {children}: special prop that represents all of the nested elements inside a component
    <UserContextProvider>
      <>...</> // < children
    </UserContextProvider>
 */
export const UserContextProvider = ({ children }: PropsWithChildren) => {

  const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number) => {
    console.log(userId);
    return true;
  }

  const handleLogout = () => {
    console.log('Logout...')
  }

  return (
    <UserContext
      value={{
        authStatus: authStatus,
        user: user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
}