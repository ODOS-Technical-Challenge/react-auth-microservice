import React from "react";
import { render, screen } from "@testing-library/react";

import { CenterPane } from "../index";

describe("Common Component: Layout Component - Center Pane", () => {
  it("should handle rendering children.", async () => {
    render(
      <CenterPane>
        <input />
      </CenterPane>
    );

    const child = await screen.findByRole("textbox");
    expect(child).toBeInTheDocument();
  });

  it("should handle overloading styles.", () => {
    const { container } = render(
      <CenterPane style={{ display: "box" }}>
        <input />
      </CenterPane>
    );

    expect(container.innerHTML).toContain("box");
  });

  it("should handle adding styles.", () => {
    const { container } = render(
      <CenterPane style={{ color: "white" }}>
        <input />
      </CenterPane>
    );

    expect(container.innerHTML).toContain("white");
  });
});
