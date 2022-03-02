import React, { FunctionComponent } from "react";
import { IconCancel } from "@trussworks/react-uswds";
import { Link } from "react-router-dom";
import { CenterPane } from "..";
import { ROUTES } from "../../utils";

/**
 * Unauthorized Component
 * @returns
 */
export const Unauthorized: FunctionComponent = () => {
  return (
    <CenterPane>
      <IconCancel />
      <p>You are not authorized for this selected action.</p>

      <p>
        Go to home <Link to={ROUTES.Home.path}>page</Link>
      </p>
    </CenterPane>
  );
};
