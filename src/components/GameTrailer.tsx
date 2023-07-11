import useTrailers from "../hooks/useTrailers";

interface Props {
  gameSlug: string;
}

function GameTrailer({ gameSlug }: Props) {
  const { data, error, isLoading } = useTrailers(gameSlug);

  if (error || !data || !data[0] || isLoading) return null;

  return (
    <video
      src={data[0].data[480]}
      poster={data[0].preview}
      controls
      width={480}
      autoPlay
      muted
    />
  );
}

export default GameTrailer;
