import { render, screen } from "@testing-library/react";
import React from "react";

import { Page } from "./page.component";

describe("Common Component: Page", () => {
  it("should handle rendering the children.", async () => {
    render(
      <Page>
        <input />
      </Page>
    );

    const children = await screen.findByRole("textbox");

    expect(children).toBeInTheDocument();
  });

  it("should handle page status: loading.", async () => {
    const { container } = render(
      <Page isLoading={true}>
        <input />
      </Page>
    );

    expect(container.innerHTML).toContain("svg");
    expect(container.innerHTML).not.toContain("input");
  });

  it("should handle page status: not-loading.", async () => {
    const { container } = render(
      <Page>
        <input />
      </Page>
    );

    expect(container.innerHTML).not.toContain("svg");
  });
});
