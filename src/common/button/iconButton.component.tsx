import React, { FunctionComponent } from "react";
import { IconProps } from "@trussworks/react-uswds/lib/components/Icon/Icon";
import { Link } from "react-router-dom";

interface Props {
  icon: React.ComponentType<IconProps>;
  name: string;

  href?: string;
  onClick?: VoidFunction;

  appearance?: "muted" | "default" | "success";
  iconSize?: number;
}

export const IconButton: FunctionComponent<Props> = ({
  appearance,
  href,
  icon,
  name,
  ...props
}: Props) => {
  const Icon = icon;

  const style: Record<string, string> = {};

  if (appearance === "muted") {
    style.backgroundColor = "transparent";
    style.border = "none";
  }

  if (href) {
    return (
      <Link to={href}>
        <button
          name={name}
          type="button"
          style={{ height: "32px", width: "32px" }}
        >
          <Icon />
        </button>
      </Link>
    );
  }
  return (
    <button
      name={name}
      type="button"
      style={{ height: "32px", width: "32px", ...style }}
      {...props}
    >
      <Icon />
    </button>
  );
};
