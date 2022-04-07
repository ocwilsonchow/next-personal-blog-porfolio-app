import { Box, Button, Center, Flex, FormControl, Input, Text, Textarea } from "@chakra-ui/react";

const Comments = ({comments}) => {
  return (
    <Flex flexDir="column">
      <Text fontWeight="bold" fontSize="xl" mt={6}>
        Comments
      </Text>
      {!comments && (
        <Text fontWeight="thin">No comment on this post yet.</Text>
      )}
      <FormControl py={4}>
        <Textarea />
      </FormControl>
      <Button>Comment</Button>
    </Flex>
  );
};

export default Comments;
