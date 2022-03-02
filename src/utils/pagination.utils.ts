import { Location } from "history";
import QueryString from "qs";
import { PageConstants, SortConstants } from "./constants";

export interface PaginationQueryType {
  size: string;
  page: string;
  query: string;
  order: string;
  orderBy: string;
}

function parsePaginationQuery(location: Location): PaginationQueryType {
  const url = QueryString.parse(location.search);
  const page = `${url["?page"] || url.page || PageConstants.Page}`;
  const size = `${url.size || url["?size"] || PageConstants.Size}`;
  const query = `${url.query || url["?query"] || ""}`;
  const order = `${url.order || url["?order"] || SortConstants.Ascending}`;
  const orderBy = `${url.orderBy || url["?orderBy"] || ""}`;

  return { page, size, query, order, orderBy };
}

export interface PaginationLooseQueryType {
  size: string | number;
  page: string | number;
  query?: string;
  order?: string;
  orderBy?: string;
}

function generatePaginationQuery({
  size,
  page,
  query = "",
  order = SortConstants.Ascending,
  orderBy = "",
}: PaginationLooseQueryType): string {
  return new URLSearchParams({
    size: `${size}`,
    page: `${page}`,
    query,
    order,
    orderBy,
  }).toString();
}

export const utils = {
  generate: generatePaginationQuery,
  parse: parsePaginationQuery,
};
