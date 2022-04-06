import React from "react";
import { Badge, Flex, HStack, Tag, Text } from "@chakra-ui/react";

const AboutShort = () => {
  return (
    <Flex flexDir="column" p={2}>
      <Text mt={8} mb={2} fontWeight="extrabold" fontSize="xl">
        About
      </Text>
      <Text fontWeight="extrabold" fontSize="4xl">
        Wilson Chow
      </Text>
      <Text fontWeight="light">
        Full-stack Web Developer · React Developer · Front-end Lover · 3D
        Graphics Lover
      </Text>
      <Text fontWeight="light">Based in Hong Kong</Text>

      <Text mt={8} mb={2} fontWeight="extrabold" fontSize="xl">
        Biography
      </Text>
      <Text fontWeight="light">
        Wilson is a passionate web developer based in Hong Kong. From a pharmacy background.
        Love beautiful software applications. Indulged in front-end
        development and Blender 3D modelling. Good at design. His vision is to
        build applications that help people live better lives.
      </Text>
    </Flex>
  );
};

export default AboutShort;
