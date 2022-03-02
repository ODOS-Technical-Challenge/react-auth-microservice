import axios from "axios";
import { UserType } from "../types";
import { ApiUtils, BACKEND_URL } from "../utils";
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
 * Fetch current user using Session Token
 * @returns
 */
export async function getCurrentUser() {
  const url = `${BACKEND_URL}/user/current`;

  try {
    const response = await axios.get(url, {
      responseType: "json",
      withCredentials: true,
    });

    console.log(response);

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return ApiUtils.handle<UserType>(error, {
      id: "",
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      realmRoles: [],
      groups: [],
    });
  }
}

/**
 * REST User Api Resource
 */
export const api = {
  getAll: getAllUsers,
  getCurrent: getCurrentUser,
};
