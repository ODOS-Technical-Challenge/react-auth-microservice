import React from "react";
import { render, screen } from "@testing-library/react";
import { IconLink } from "@trussworks/react-uswds";

import { IconButton } from "../index";

jest.mock("react-router-dom", () => ({
  Link: jest.fn(({ children }: any) => <div>{children}</div>),
}));

describe("Common Component: Icon Button", () => {
  it("should handle rendering the component.", async () => {
    render(<IconButton name="button" icon={IconLink} />);

    const button = await screen.findByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should handle rendering the component as a link.", async () => {
    render(<IconButton name="button" icon={IconLink} href="link" />);

    const button = await screen.findByRole("button");
    expect(button).toBeInTheDocument();
  });
});
