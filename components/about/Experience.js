import {
  Flex,
  Text,
  Center,
  Spinner,
  List,
  ListItem,
  ListIcon,
  Circle,
} from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";

export default function Experience({ experiences }) {
  return (
    <Flex flexDir="column" p={2}>
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
            <Flex
              flexDir="column"
              key={i}
              mb={3}
              borderWidth="1px"
              borderRadius="md"
              p={3}
            >
              <Text fontWeight="extrabold">{experience.title}</Text>
              <List flexDir="column">
                {experience.description.map((item, i) => (
                  <ListItem display="flex" fontWeight="light" key={i}>
                    <ListIcon as={BsDot} mt={1}/>
                    {item}
                  </ListItem>
                ))}
              </List>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
