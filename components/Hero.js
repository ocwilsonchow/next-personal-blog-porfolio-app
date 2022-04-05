import React from "react";
import { Center, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Devdesk from "../images/devTransparent.png";

const Hero = () => {
  return (
    <VStack p={2}>
      <Image src={Devdesk} width="500px" height="500px" />
      <Text fontWeight="bold" fontSize="6xl">Launching Soon.</Text>
    </VStack>
  );
};

export default Hero;
