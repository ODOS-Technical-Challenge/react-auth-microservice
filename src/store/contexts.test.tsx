import { renderHook } from "@testing-library/react-hooks";

import { useAuth } from "./contexts";

describe("Application Store: use Auth", () => {
  it("should handle calling the hook.", () => {
    const { result } = renderHook(() => useAuth());

    expect(result.current).toEqual({});
  });

  test.todo("further testing to the authorization context.");
});
