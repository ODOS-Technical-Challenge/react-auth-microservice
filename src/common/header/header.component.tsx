import React, { Fragment, FunctionComponent } from "react";
import { GovBanner } from "@trussworks/react-uswds";

export const Header: FunctionComponent = () => {
  return (
    <Fragment>
      <GovBanner
        style={{ background: "white" }}
        language="english"
        tld=".gov"
        aria-label="Official government website"
      />
    </Fragment>
  );
};
