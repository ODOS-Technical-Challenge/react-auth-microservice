import React from "react";
import { render, screen } from "@testing-library/react";

import { FavoriteButton } from "../index";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
  Link: jest.fn(({ children }: any) => <div>{children}</div>),
}));

describe("Common Component: Favorite Button", () => {
  it("should handle rendering the component.", async () => {
    render(<FavoriteButton />);

    const button = await screen.findByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should handle user action: on click.", async () => {
    render(<FavoriteButton />);

    const button = await screen.findByRole("button");
    expect(button).toBeInTheDocument();

    userEvent.click(button);
  });
});
