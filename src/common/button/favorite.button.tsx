import React, { FunctionComponent, useState } from "react";
import { IconFavorite, IconFavoriteBorder } from "@trussworks/react-uswds";
import { IconButton } from "../index";

interface Props {
  initial?: boolean;
}

export const FavoriteButton: FunctionComponent<Props> = ({
  initial = false,
}: Props) => {
  const [favorite, setFavorite] = useState(initial);

  return (
    <IconButton
      icon={favorite ? IconFavorite : IconFavoriteBorder}
      name="favorite"
      appearance="muted"
      onClick={() => setFavorite(!favorite)}
    />
  );
};
