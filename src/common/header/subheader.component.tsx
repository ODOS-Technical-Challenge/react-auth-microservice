import React, { FunctionComponent, ReactNode } from "react";
import { PrimaryNav, Header } from "@trussworks/react-uswds";
import { ROUTES } from "../../utils";

interface Props {
  children?: ReactNode;
}

export const SubHeader: FunctionComponent<Props> = ({ children }: Props) => {
  const menuItems: React.ReactNode[] = [
    // <>
    //   <a href={ROUTES.Favorites.path} className="usa-nav__link">
    //     Favorites
    //   </a>
    // </>,
  ];
  return (
    <Header
      style={{
        background: "white",
        boxShadow:
          "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div className="usa-nav-container">
        <div className="usa-navbar">
          <a href={ROUTES.Home.path}>
            {/* <img height={32} src={logo} alt="logo" style={{ margin: "16px" }} /> */}
            logo
          </a>
          <PrimaryNav items={menuItems}></PrimaryNav>
        </div>
        {children}
      </div>
    </Header>
  );
};
