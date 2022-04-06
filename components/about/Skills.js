import { Badge, Flex, HStack, Tag, Text } from "@chakra-ui/react";
import React from "react";

const skills = [
  {
    name: "React",
    url: "https://reactjs.org/",
  },
  {
    name: "Blender",
    url: "https://www.blender.org/",
  },
  {
    name: "Front-end",
  },
  {
    name: "3D Modelling",
  },
  {
    name: "Self-learning",
  },
  {
    name: "Communication",
  },
];

const Skills = () => {
  return (
    <Flex flexDir="column" p={2}>
      <Text mt={8} mb={2} fontWeight="extrabold" fontSize="xl">
        Skills
      </Text>
      <Flex flexWrap="wrap">
        {skills.map((skill) => (
          <Tag m={1} fontSize="md" fontWeight="bold" colorScheme="cyan">{skill.name}</Tag>
        ))}
      </Flex>
    </Flex>
  );
};

export default Skills;
