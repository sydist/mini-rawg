import axios, { AxiosRequestConfig } from "axios";

interface Response<T> {
  count: number;
  results: T[];
}

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d48a0210cb3e4075823025b0bbb484c3",
  },
});

export default class APIClient<T> {
  constructor(public endpoint: string) {}

  async getAll(config: AxiosRequestConfig = {}) {
    const res = await apiClient.get<Response<T>>(this.endpoint, config);
    return res.data.results;
  }

  async get(id: number | string) {
    const res = await apiClient.get<T>(this.endpoint + "/" + id);
    return res.data;
  }
}
