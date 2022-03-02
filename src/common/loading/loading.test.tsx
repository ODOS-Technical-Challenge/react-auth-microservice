import React from "react";
import { render } from "@testing-library/react";
import { Loading } from "./loading.component";

describe("Common Component: Loading Component", () => {
  it("should handle rendering the component.", () => {
    const { container } = render(<Loading />);

    expect(container.innerHTML).toContain("svg");
  });
});
