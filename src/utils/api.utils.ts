import { AxiosError } from "axios";

/**
 * Handle informing the user of an error, along with returning the correct result
 * @param error the axios error
 * @param data the default data
 * @returns status, error message, and data
 */
export function handle<T = undefined>(error: unknown, data: T) {
  const response = (error as AxiosError).response;
  const status = response?.status || 400;

  return { status, error: response?.data, data };
}

/**
 * Handle informing the user of an error
 * @param error the axios error
 * @returns status, error message, and data
 */
export function handleStatus(error: unknown, message?: string) {
  const response = (error as AxiosError).response;
  const status = response?.status || 400;

  return { status, error: message || response?.data };
}

export const utils = {
  handle,
  handleStatus,
};
