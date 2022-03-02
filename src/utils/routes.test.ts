import { structureRoute } from "./index";

describe("Utils: structure a route with url parameters", () => {
  it("Should handle a route without parameters.", () => {
    const route = { path: "/home" };
    const expected = "/home";

    const result = structureRoute(route, {});
    expect(result).toEqual(expected);
  });

  it("Should handle replacing a url paramter.", () => {
    const route = { path: "/home/:id" };
    const expected = "/home/123";

    const result = structureRoute(route, { id: "123" });
    expect(result).toEqual(expected);
  });

  it("Should handle replacing multiple url parameters.", () => {
    const route = { path: "/home/:id/:version" };
    const expected = "/home/123/1.0.0";

    const result = structureRoute(route, { id: "123", version: "1.0.0" });
    expect(result).toEqual(expected);
  });
});
