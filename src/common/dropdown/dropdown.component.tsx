import React, { FunctionComponent, useState } from "react";
import { IconArrowDropDown, IconArrowDropUp } from "@trussworks/react-uswds";
import { IconButton } from "..";

interface Props {
  children: React.ReactNode;
  title?: string;

  initial?: boolean;
}

export const Dropdown: FunctionComponent<Props> = ({
  children,
  title,
  initial = true,
}: Props) => {
  const [minimized, setMinimized] = useState(initial);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {title && <h3>{title}</h3>}
        <IconButton
          appearance="muted"
          name="Minimize"
          icon={minimized ? IconArrowDropDown : IconArrowDropUp}
          onClick={() => setMinimized(!minimized)}
        />
      </div>

      {!minimized && children}
    </div>
  );
};
