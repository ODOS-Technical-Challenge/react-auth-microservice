import { createContext, useContext } from "react";
import { UserContextType } from "../types";

export const AppContext = createContext({});
export const AuthContext = createContext<UserContextType>({} as any);

export function useAuth() {
  return useContext(AuthContext);
}
