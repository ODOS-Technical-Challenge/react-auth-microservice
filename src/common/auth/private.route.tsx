import React, { ReactNode, useEffect } from "react";
import { Unauthorized } from "./unauthorized.component";
import { useAuth } from "../../store";
import { CenterPane, Loading } from "../index";

interface Props {
  children: ReactNode;
  roles?: string[];
}

/**
 * Private Route that handles authentication and authorization
 * @returns
 */
export const PrivateRoute = ({ children, roles }: Props) => {
  const userStore = useAuth();

  useEffect(() => {
    if (!userStore.token) {
      userStore.init();
    }
  }, [userStore]);

  if (!userStore?.token || !userStore?.user.id) {
    return (
      <CenterPane style={{ marginTop: 64 }}>
        <Loading />
      </CenterPane>
    );
  }
  if (userStore.isAuthorized(roles)) {
    return <div>{children}</div>;
  }
  return <Unauthorized />;
};
