import { act, renderHook } from "@testing-library/react-hooks";
import { useValue } from "./value.hook";

describe("Common Hook: Use Value", () => {
  it("should handle initial value.", () => {
    const data = "hey";
    const { result } = renderHook(() => useValue(data));

    expect(result.current[0]).toEqual(data);
  });

  it("should handle updated value.", () => {
    const data = "hey";
    const { result } = renderHook(() => useValue(data));

    act(() => {
      result.current[1]("update");
    });

    expect(result.current[0]).toEqual("update");
  });

  it("should handle a new initial value.", () => {
    const { result, rerender } = renderHook(({ text }) => useValue(text), {
      initialProps: { text: "Test String" },
    });

    act(() => {
      result.current[1]("update");
    });

    rerender({ text: "goodbye" });

    expect(result.current[0]).toEqual("goodbye");
  });
});
