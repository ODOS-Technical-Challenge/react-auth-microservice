import { utils } from "./api.utils";

describe("Common Utility Functions: Api Error Utils", () => {
  it("should handle normal api error response.", () => {
    const error = { response: { status: 401 } };

    const response = utils.handle(error, []);

    expect(response.status).toEqual(error.response.status);
  });

  it("should handle normal api error response.", () => {
    const error = { response: { status: 401 } };

    const statuses = [400, 401, 403, 500];

    statuses.forEach((status) => {
      error.response.status = status;

      const response = utils.handle(error, []);
      expect(response.status).toEqual(error.response.status);
    });
  });

  it("should handle error before api request.", () => {
    const error = {};

    const response = utils.handle(error, []);

    expect(response.status).toEqual(400);
  });
});

describe("Common Utility Functions: Api Error Utils - status only", () => {
  it("should handle normal api error response.", () => {
    const error = { response: { status: 401 } };

    const response = utils.handleStatus(error);

    expect(response.status).toEqual(error.response.status);
  });

  it("should handle normal api error response.", () => {
    const error = { response: { status: 401 } };

    const statuses = [400, 401, 403, 500];

    statuses.forEach((status) => {
      error.response.status = status;

      const response = utils.handleStatus(error);
      expect(response.status).toEqual(error.response.status);
    });
  });

  it("should handle error before api request.", () => {
    const error = {};

    const response = utils.handleStatus(error);

    expect(response.status).toEqual(400);
  });
});
