import { Flex, Text, Center, Spinner, Img } from "@chakra-ui/react";

const Education = ({ educations }) => {
  return (
    <Flex flexDir="column" p={2}>
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
            <Flex alignItems="center" borderWidth="1px" borderRadius="md" mb={3} p={3} key={i}>
              <Img
                src={education.mainImage.asset.url}
                boxSize="90px"
                objectFit="cover"
                alt=""
                mr={3}
                borderRadius="sm"
              />
              <Flex flexDir="column">
                <Text fontWeight="extrabold">{education.position}</Text>
                <Text  fontWeight="light">{education.title}</Text>
                <Text fontWeight="light">
                  {education.organization}, {education.place}
                </Text>
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
