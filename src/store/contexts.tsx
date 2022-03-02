import { createContext, useContext } from "react";

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export const AppContext = createContext({});
export const AuthContext = createContext<AuthContextType>({} as any);

export function useAuth() {
  return useContext(AuthContext);
}
