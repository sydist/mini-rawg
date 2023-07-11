import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

function GameTrailer({ gameId }: Props) {
  const { data, error, isLoading } = useTrailers(gameId);

  if (error || !data || isLoading) return null;

  console.log(data);

  const videoData = data[0];
  return (
    <video
      src={videoData.data[480].toString()}
      poster={videoData.preview}
      controls
      width={480}
      autoPlay
      muted
    />
  );
}

export default GameTrailer;
