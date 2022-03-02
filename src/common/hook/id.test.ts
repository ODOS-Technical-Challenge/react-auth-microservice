import { renderHook } from "@testing-library/react-hooks";
import { useId } from "./id.hook";
import { nanoid } from "nanoid";

jest.mock("nanoid", () => ({ nanoid: jest.fn(() => "") }));

describe("Common Component: Hook - Use Id", () => {
  it("should handle id.", () => {
    const id = "id";
    const { result } = renderHook(() => useId(id));

    expect(result.current[0]).toEqual(id);
  });

  it("should handle generating an id.", () => {
    const id = "id";
    (nanoid as jest.Mock<string, []>).mockReturnValue(id);

    const { result } = renderHook(() => useId());

    expect(result.current[0]).toEqual(id);
  });
});
