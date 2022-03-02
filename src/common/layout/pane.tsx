import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: React.CSSProperties;
}

export const Pane: FunctionComponent<Props> = ({
  children,
  style = {},
}: Props) => {
  return (
    <div
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};
