import { Flex, Text, Center, Spinner } from "@chakra-ui/react";

export default function Experience({experiences}) {
  return (
    <Flex flexDir="column" p={4}>
      <Text mt={8} mb={2} fontWeight="extrabold" fontSize="xl">
        Experience
      </Text>
      <Flex flexDir="column" justifyContent="center">
        {!experiences && (
          <Center p={6}>
            <Spinner />
          </Center>
        )}
        <Flex flexDir="column">
          {experiences?.map((experience, i) => (
            <Flex flexDir="column" key={i} mb={3} borderWidth="1px" p={3}>
              <Text fontWeight="bold">{experience.title}</Text>
              <Text>{experience.description.map((item, i) => (
                <Text key={i}>{item}</Text>
              ))}</Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
