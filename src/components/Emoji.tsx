import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import skip from "../assets/skip.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

export default function Emoji(props: Props) {
  console.log(props.rating);

  const emojiMap: { [key: number]: ImageProps } = {
    5: { src: bullsEye, alt: "Exceptional", title: "Exceptional", boxSize: 7 },
    4: { src: thumbsUp, alt: "Recommended", title: "Recommended", boxSize: 6 },
    3: { src: meh, alt: "Meh", title: "Meh", boxSize: 6 },
    2: { src: skip, alt: "Skip", title: "Skip", boxSize: 6 },
    1: { src: skip, alt: "Skip", title: "Skip", boxSize: 6 },
  };
  return <Image {...emojiMap[props.rating]} marginTop={1} />;
}
