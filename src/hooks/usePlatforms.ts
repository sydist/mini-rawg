import parent_platforms from "../data/parent_platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default () => ({
  data: parent_platforms,
  isLoading: false,
  error: null,
});
