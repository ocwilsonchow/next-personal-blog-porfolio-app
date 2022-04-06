import { Flex, Text, Center, Spinner, Img } from "@chakra-ui/react";

const Education = ({ educations }) => {
  return (
    <Flex flexDir="column" p={4}>
      <Text mt={8} mb={2} fontWeight="extrabold" fontSize="xl">
        Education
      </Text>
      <Flex flexDir="column" justifyContent="center">
        {!educations && (
          <Center p={6}>
            <Spinner />
          </Center>
        )}
        <Flex flexDir="column">
          {educations?.map((education, i) => (
            <Flex alignItems="center" borderWidth="1px" borderRadius="md" mb={3} p={3}>
              <Img
                src={education.mainImage.asset.url}
                boxSize="80px"
                objectFit="cover"
                alt=""
                mr={3}
              />
              <Flex flexDir="column" key={i}>
                <Text fontWeight="bold">{education.title}</Text>
                <Text fontWeight="light">
                  {education.organization}, {education.place}
                </Text>
                <Text fontWeight="bold">{education.position}</Text>
                <Flex>
                  {education?.description?.map((item, i) => (
                    <Text key={i} fontWeight="light">
                      {item}
                    </Text>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Education;
