import React, { useEffect } from "react";
import { Route, RouteProps } from "react-router-dom";
import { Unauthorized } from "./unauthorized.component";
import { useAuth } from "../../store";
import { Loading } from "../index";

interface Props extends RouteProps {
  roles?: string[];
}

/**
 * Private Route that handles authentication and authorization
 * @returns
 */
export const PrivateRoute = ({ element, roles, ...rest }: Props) => {
  const userStore = useAuth();

  useEffect(() => {
    if (!userStore.token) {
      userStore.init();
    }
  }, [userStore]);

  return (
    <Route
      {...rest}
      element={() => {
        if (!userStore?.token || !userStore?.user.id) {
          return <Loading />;
        }
        if (userStore.isAuthorized(roles)) {
          return element;
        } else {
          return <Unauthorized />;
        }
      }}
    />
  );
};
