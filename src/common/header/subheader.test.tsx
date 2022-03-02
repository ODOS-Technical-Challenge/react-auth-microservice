import React from "react";
import { render, screen } from "@testing-library/react";

import { Header } from "./header.component";

describe("Common Component: Header Component", () => {
  it("should handle rendering children.", async () => {
    render(<Header />);

    const child = await screen.findByText("Official websites use .gov");

    expect(child).toBeInTheDocument();
  });
});
