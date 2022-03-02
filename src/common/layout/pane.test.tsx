import React from "react";
import { render, screen } from "@testing-library/react";

import { Pane } from "../index";

describe("Common Component: Layout Component - Pane", () => {
  it("should handle rendering children.", async () => {
    render(
      <Pane>
        <input />
      </Pane>
    );

    const child = await screen.findByRole("textbox");
    expect(child).toBeInTheDocument();
  });

  it("should handle overloading styles.", () => {
    const { container } = render(
      <Pane style={{ display: "box" }}>
        <input />
      </Pane>
    );

    expect(container.innerHTML).toContain("box");
  });

  it("should handle adding styles.", () => {
    const { container } = render(
      <Pane style={{ color: "white" }}>
        <input />
      </Pane>
    );

    expect(container.innerHTML).toContain("white");
  });
});
