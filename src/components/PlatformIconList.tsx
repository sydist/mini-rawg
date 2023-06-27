import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaApple,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const ICON_MAP: { [key: string]: IconType } = {
  playstation: FaPlaystation,
  pc: FaWindows,
  xbox: FaXbox,
  nintendo: SiNintendo,
  android: FaAndroid,
  mac: FaApple,
  linux: FaLinux,
  ios: MdPhoneIphone,
  web: BsGlobe,
};

export default function PlatformIconList(props: Props) {
  return (
    <HStack marginY={2}>
      {props.platforms.map((platform) => (
        <Icon key={platform.id} as={ICON_MAP[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
}
