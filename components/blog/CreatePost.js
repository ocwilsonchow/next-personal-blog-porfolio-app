import React from "react";
import {
  Input,
  Flex,
  FormControl,
  Text,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

const CreatePost = () => {
  return (
    <Flex flexDir="column" p={4}>
      <Text fontSize="2xl" fontWeight="bold" textAlign="center">
        Create Post Component
      </Text>
      <FormControl py={4}>
        <FormLabel>Post Title</FormLabel>
        <Input mb={4} />

        <FormLabel>Post Title</FormLabel>
        <Textarea mb={4} />
      </FormControl>
    </Flex>
  );
};

export default CreatePost;
