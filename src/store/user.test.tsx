import React from "react";
import { render } from "@testing-library/react";

import { UserStore } from "./user.store";

describe("Stores: User Store", () => {
  it("should handle rendering component.", () => {
    render(
      <UserStore>
        <input />
      </UserStore>
    );
  });
});
