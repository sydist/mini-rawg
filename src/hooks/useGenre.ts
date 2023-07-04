import useGenres from "./useGenres";

export default (id?: number) => {
  const { data } = useGenres();
  return data.find((e) => e.id === id);
};
