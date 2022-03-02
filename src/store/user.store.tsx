import React, { FunctionComponent, useState } from "react";
import { KeycloakConstants } from "../utils";
import { AuthContext } from "./contexts";
import { UserType } from "../types";
import Keycloak from "keycloak-js";
import { UserApi } from "../api";

const keycloakJSON = {
  realm: KeycloakConstants.Realm,
  url: KeycloakConstants.Url,
  clientId: KeycloakConstants.Client,
};

interface Props {
  children: React.ReactNode;
}

export const authProvider = {
  user: "",
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    authProvider.isAuthenticated = true;
    setTimeout(callback, 100); // fake async
  },
  signout(callback: VoidFunction) {
    authProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export const UserStore: FunctionComponent<Props> = ({ children }: Props) => {
  const [keycloak] = useState<Keycloak.KeycloakInstance>(
    Keycloak(keycloakJSON)
  );
  const [token, setToken] = useState("");
  const [user, setUser] = useState<UserType>({
    id: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    realmRoles: [],
    groups: [],
  });

  const init = async () => {
    keycloak.init({ onLoad: "login-required" }).then(
      async (authenticated) => {
        if (authenticated) {
          setToken(keycloak.token || "");
          await initializeUser();
        }
      },
      (reason) => {
        console.log("Reason: ", reason);
      }
    );
  };

  const isAuthorized = (roles?: string[]) => {
    const validRoles = roles || [];
    const currentRoles = user.realmRoles;

    for (const role of validRoles) {
      if (currentRoles.find((each) => each.name === role)) {
        return true;
      }
    }
    return false;
  };

  const initializeUser = async () => {
    const { data } = await UserApi.getCurrent();

    setUser({
      firstName: data?.firstName || "",
      lastName: data?.lastName || "",
      username: data?.username || "",
      email: data?.email || "",
      id: data?.id || "",
      realmRoles: data?.realmRoles || [],
      groups: data?.groups || [],
    });
  };

  return (
    <AuthContext.Provider value={{ user, token, isAuthorized, init }}>
      {children}
    </AuthContext.Provider>
  );
};
