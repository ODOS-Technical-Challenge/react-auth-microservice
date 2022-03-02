import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Dropdown } from "../index";

describe("Common Component: Layout Component - Dropdown", () => {
  it("should handle rendering children.", async () => {
    render(
      <Dropdown initial={false}>
        <input />
      </Dropdown>
    );

    const child = await screen.findByRole("textbox");
    expect(child).toBeInTheDocument();
  });

  it("should handle user action: on click.", async () => {
    render(
      <Dropdown>
        <input />
      </Dropdown>
    );

    const button = await screen.findByRole("button");

    userEvent.click(button);

    const child = await screen.findByRole("textbox");
    expect(child).toBeInTheDocument();
  });
});
