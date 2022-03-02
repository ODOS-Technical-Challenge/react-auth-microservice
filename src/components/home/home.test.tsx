import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import { UserApi } from "../../api";

import { HomePage } from "./home.page";

jest.mock("../../api", () => ({ UserApi: { getAll: jest.fn() } }));

const getAll = UserApi.getAll as jest.MockedFunction<typeof UserApi.getAll>;

describe("Application Page: Search Page", () => {
  beforeEach(() => {
    getAll.mockResolvedValue({ data: [], status: 200 });
  });

  it("should handle rendering the component.", async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    const search = await screen.findByLabelText("Search");
    expect(search).toBeInTheDocument();
  });

  it("should handle user interaction: 'search' action.", async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    const search = await screen.findByLabelText("Search");
    userEvent.type(search, "query");
  });

  it("should handle user interaction: 'search' action.", async () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    const search = await screen.findByLabelText("Search");
    userEvent.type(search, "query");

    const buttons = await screen.findAllByText("Search");

    for (const button of buttons) {
      act(() => {
        userEvent.click(button);
      });
    }
  });
});
