import { RouteType } from "../types";

export const structureRoute: (
  route: RouteType,
  options: { [key: string]: string }
) => string = (route, options) => {
  let result = route.path;

  Object.keys(options).forEach((key) => {
    result = result.replace(`:${key}`, options[key]);
  });

  return result;
};
