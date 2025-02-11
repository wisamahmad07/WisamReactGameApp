import { Image, ImageProps } from "@chakra-ui/react";
import bullEyes from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "Recommended", boxSize: "25px" },
    5: { src: bullEyes, alt: "Exceptional", boxSize: "30px" },
  };

  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
