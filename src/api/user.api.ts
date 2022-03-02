import axios from "axios";
import { UserType } from "../types";
import { ApiUtils } from "../utils";
// import { BACKEND_URL } from "../utils";
// import { stringify } from "querystring";

/**
 * Get mock data from mockaroo
 * @returns
 */
export async function getAllUsers(params: URLSearchParams) {
  console.log("Parameters", params);
  //   const url = `${BACKEND_URL}/user/all/?${params.toString()}`;
  const url = "https://my.api.mockaroo.com/person.json?key=7d32a3f0";

  try {
    const { status, data } = await axios.get<UserType[]>(url);

    return { data, status };
  } catch (error) {
    return ApiUtils.handle<UserType[]>(error, []);
  }
}

/**
 * REST User Api Resource
 */
export const api = {
  getAll: getAllUsers,
};
