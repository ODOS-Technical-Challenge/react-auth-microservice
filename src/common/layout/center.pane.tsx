import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: React.CSSProperties;
}

// A layout component that centers it's children
export const CenterPane: FunctionComponent<Props> = ({
  children,
  style = {},
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0px auto",
        width: "100%",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
