import React from "react";
import { render } from "@testing-library/react";

import { PrivateRoute } from "./private.route";

jest.mock("react-router-dom", () => ({
  Link: ({ to, children }: any) => <a href={to}>{children}</a>,
}));

jest.mock("../../store", () => ({
  useAuth: () => ({
    token: "1",
    user: { id: "1" },
    init: jest.fn(),
    isAuthorized: jest.fn((roles) => !!roles?.length),
  }),
}));

describe("Authorization Component: Unauthorized Page", () => {
  it("should handle rendering component.", () => {
    render(
      <PrivateRoute>
        <input />
      </PrivateRoute>
    );
  });

  it("should handle rendering component.", () => {
    jest.mock("../../store", () => ({
      useAuth: () => ({ isAuthorized: () => true }),
    }));

    render(
      <PrivateRoute roles={["hi"]}>
        <input />
      </PrivateRoute>
    );
  });
});
