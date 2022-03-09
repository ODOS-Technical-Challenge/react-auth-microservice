import React from "react";
import { render } from "@testing-library/react";

import { PrivateRoute } from "./private.route";

jest.mock("../../store", () => ({
  useAuth: () => ({ init: jest.fn(), isAuthorized: jest.fn() }),
}));

describe("Authorization Component: Unauthorized Page", () => {
  it("should handle rendering component.", () => {
    render(
      <PrivateRoute>
        <input />
      </PrivateRoute>
    );
  });
});
