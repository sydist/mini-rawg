import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default function useData<T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error: AxiosError) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint, JSON.stringify(requestConfig)]);

  return { data, error, isLoading };
}
