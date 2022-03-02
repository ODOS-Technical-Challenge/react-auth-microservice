import React from "react";
import { render } from "@testing-library/react";

import { Header } from "./header.component";

describe("Common Component: Header Component", () => {
  it("should handle rendering component.", () => {
    render(<Header />);
  });
});
