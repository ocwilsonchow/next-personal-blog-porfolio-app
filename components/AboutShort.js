import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const AboutShort = () => {
  return (
    <Flex flexDir="column" p={4}>
      <Text mt={8} mb={2} fontWeight="extrabold" fontSize="md">
        About
      </Text>
      <Text fontWeight="extrabold" fontSize="4xl">
        Wilson Chow
      </Text>
      <Text>React Developer · Front-end Lover · 3D Graphics Lover</Text>
      <Text>Based in Hong Kong</Text>
      <Text mt={8} mb={2} fontWeight="extrabold" fontSize="md">
        Biography
      </Text>
      <Text>
        Passionate web developer based in Hong Kong. From a pharmacy background.
        Love beautiful software applications. Passionate in front-end
        development and Blender 3D modelling. Good at design. His vision is to
        build applications that help people live better lives.
      </Text>
    </Flex>
  );
};

export default AboutShort;
