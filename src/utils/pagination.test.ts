import { PageConstants } from "./constants";

import { PageUtils } from "./index";

describe("Common Utility Function: parse pagination query", () => {
  it("Should handle undefined query string", () => {
    const location = { search: {} } as any;
    const result = PageUtils.parse(location);

    expect(result.page).toEqual(`${PageConstants.Page}`);
    expect(result.size).toEqual(`${PageConstants.Size}`);
  });

  it("Should handle defined query string", () => {
    const location = {
      search: { page: 2, size: 3, query: "string", order: "1", orderBy: "2" },
    } as any;
    const result = PageUtils.parse(location);

    expect(result.page).toEqual(`${location.search.page}`);
    expect(result.size).toEqual(`${location.search.size}`);
    expect(result.query).toEqual(location.search.query);
    expect(result.order).toEqual(location.search.order);
    expect(result.orderBy).toEqual(location.search.orderBy);
  });

  it("Should handle defined query string", () => {
    const location = {
      search: {
        "?page": 2,
        "?size": 3,
        "?query": "string",
        "?order": "1",
        "?orderBy": "2",
      },
    } as any;
    const result = PageUtils.parse(location);

    expect(result.page).toEqual(`${location.search["?page"]}`);
    expect(result.size).toEqual(`${location.search["?size"]}`);
    expect(result.query).toEqual(location.search["?query"]);
    expect(result.order).toEqual(location.search["?order"]);
    expect(result.orderBy).toEqual(location.search["?orderBy"]);
  });
});

describe("Common Utility Function: generate pagination query", () => {
  it("Should handle minimum props", () => {
    const props = { size: 1, page: 2 };
    const result = PageUtils.generate(props);
    const expected = "size=1&page=2&query=&order=sort-asc&orderBy=";

    expect(result).toEqual(expected);
  });

  it("Should handle all props", () => {
    const props = {
      size: 1,
      page: 2,
      query: "query",
      order: "sort-asc" as any,
      orderBy: "orderBy",
    };
    const result = PageUtils.generate(props);
    const expected = "size=1&page=2&query=query&order=sort-asc&orderBy=orderBy";

    expect(result).toEqual(expected);
  });
});
