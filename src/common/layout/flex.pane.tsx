import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: React.CSSProperties;
}

export const FlexPane: FunctionComponent<Props> = ({
  children,
  style = {},
}: Props) => {
  return (
    <div
      style={{
        display: "flex",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
