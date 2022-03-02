import React, { FunctionComponent, ReactNode } from "react";
import { CenterPane, Loading } from "./index";

interface Props {
  children: ReactNode;
  isLoading?: boolean;
}

export const Page: FunctionComponent<Props> = ({
  children,
  isLoading,
}: Props) => {
  return (
    <div
      style={{
        width: "50vw",
        margin: "20px auto",
        padding: "15px",
        background: "white",
        border: "1px solid #ccc",
      }}
    >
      {isLoading && (
        <CenterPane>
          <Loading />
        </CenterPane>
      )}
      {!isLoading && children}
    </div>
  );
};
