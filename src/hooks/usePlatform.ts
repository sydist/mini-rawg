import usePlatforms from "./usePlatforms";

export default (id?: number) => {
  const { data } = usePlatforms();
  return data.find((e) => e.id === id);
};
