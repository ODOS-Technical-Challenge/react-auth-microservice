import React from "react";
import { render } from "@testing-library/react";

import { Unauthorized } from "./unauthorized.component";

jest.mock("react-router-dom", () => ({
  Link: ({ to, children }: any) => <a href={to}>{children}</a>,
}));

describe("Authorization Component: Unauthorized Page", () => {
  it("should handle rendering component.", () => {
    render(<Unauthorized />);
  });
});
