import { useContext } from "react";

import { AuthContext } from "../auth/context";
import authStorage from "../auth/storage";

export function useAuth() {
  const { user, setUser } = useContext(AuthContext);

  const signUp = async (user: any) => {
    setUser(user);
    await authStorage.storeUser(JSON.stringify(user));
  };

  const logIn = async (user: any) => {
    setUser(user);
    await authStorage.storeUser(JSON.stringify(user));
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeUser();
  };

  return { user, signUp, logIn, logOut };
}
