import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "./app/App";

jest.mock("react-dom", () => ({ render: jest.fn() }));

const render = ReactDOM.render as jest.MockedFunction<typeof ReactDOM.render>;

describe("Application Root", () => {
  it("should handle rendering component.", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);

    require("./index.tsx");

    expect(render).toHaveBeenCalledWith(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>,
      div
    );
  });
});
