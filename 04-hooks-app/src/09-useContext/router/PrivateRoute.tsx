import { use, type JSX } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router";

interface Props {
  element: JSX.Element; // React.ReactNode
}

export const PrivateRoute = ({ element }: Props) => {

  const { authStatus } = use(UserContext);

  if (authStatus === 'checking') {
    return <div>Loading...</div>;
  }

  if (authStatus === 'authenticated') {
    return element;
  }

  // replace: Whether to replace the current entry in the History stack
  return <Navigate to="/login" replace />
}