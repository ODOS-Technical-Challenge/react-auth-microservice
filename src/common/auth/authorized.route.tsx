import React, { FunctionComponent } from "react";
import { Unauthorized } from "./unauthorized.component";
import { useAuth } from "../../store/contexts";
import { Loading } from "../index";

interface Props {
  children: JSX.Element;
  roles?: string[];
}

export const RequireAuth: FunctionComponent<Props> = ({
  children,
  roles,
}: Props) => {
  const userStore = useAuth();

  if (!userStore?.token || !userStore?.user.id) {
    return <Loading />;
  }
  if (userStore.isAuthorized(roles)) {
    return children;
  } else {
    return <Unauthorized />;
  }
};
