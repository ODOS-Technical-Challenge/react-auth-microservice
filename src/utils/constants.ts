/** Application Constants **/
export const BACKEND_URL = process.env.REACT_BACKEND_URL || "/api";

/** Default Pagination Constants */
export const PageConstants = {
  Page: 1,
  Size: 25,
};

/** Sort Constants */
export const SortConstants: { [key: string]: string } = {
  None: "sort",
  Ascending: "sort-asc",
  Descending: "sort-desc",
};
