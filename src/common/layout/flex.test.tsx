import React from "react";
import { render, screen } from "@testing-library/react";

import { FlexPane } from "../index";

describe("Common Component: Layout Component - Flex Pane", () => {
  it("should handle rendering children.", async () => {
    render(
      <FlexPane>
        <input />
      </FlexPane>
    );

    const child = await screen.findByRole("textbox");
    expect(child).toBeInTheDocument();
  });

  it("should handle overloading styles.", () => {
    const { container } = render(
      <FlexPane style={{ display: "box" }}>
        <input />
      </FlexPane>
    );

    expect(container.innerHTML).toContain("box");
  });

  it("should handle adding styles.", () => {
    const { container } = render(
      <FlexPane style={{ color: "white" }}>
        <input />
      </FlexPane>
    );

    expect(container.innerHTML).toContain("white");
  });
});
