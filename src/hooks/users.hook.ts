import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { UserType } from "../types";

import { UserApi } from "../api";

/**
 * Fetch All Users React Hook
 * @returns
 */
export const useUsers = () => {
  const [data, setData] = useState<UserType[]>([]);
  const [isLoading, setLoading] = useState(false);

  const [params] = useSearchParams();

  const fetch = useCallback(async () => {
    setLoading(true);
    const result = await UserApi.getAll(params);
    setData(result.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { data, isLoading, fetch };
};
