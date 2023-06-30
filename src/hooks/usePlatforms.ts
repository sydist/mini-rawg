import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default () => useData<Platform>("/platforms/lists/parents");
