import { renderHook } from "@testing-library/react-hooks";
import { useSearchParams } from "react-router-dom";
import { UserApi } from "../api";
import { UserType } from "../types";

import { useUsers } from "./users.hook";

jest.mock("../api", () => ({
  UserApi: { getAll: jest.fn() },
}));
jest.mock("react-router-dom");

const getAll = UserApi.getAll as jest.MockedFunction<typeof UserApi.getAll>;

describe("Hook: Use Users", () => {
  beforeEach(() => {
    getAll.mockClear();

    (
      useSearchParams as jest.MockedFunction<typeof useSearchParams>
    ).mockReturnValue([new URLSearchParams(""), jest.fn()]);
  });

  it("should handle being called.", () => {
    const { result } = renderHook(() => useUsers());

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.data).toEqual([]);
  });

  it("should handle resolving REST call.", () => {
    getAll.mockResolvedValue({ data: [], status: 200 });
    const { result } = renderHook(() => useUsers());

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.data).toEqual([]);
  });

  it("should handle resolving REST call.", () => {
    const user: UserType = {
      firstName: "Jane",
      lastName: "Doe",
      username: "jdoe",
      email: "jdoe@synergybis.com",
    };

    getAll.mockResolvedValue({ data: [user], status: 200 });
    const { result } = renderHook(() => useUsers());

    expect(result.current.isLoading).toBeTruthy();
    // expect(result.current.data).toEqual([user]);
  });
});
