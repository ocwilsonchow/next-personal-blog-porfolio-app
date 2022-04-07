import { Box, Button, Center, Flex, FormControl, Input, Text, Textarea } from "@chakra-ui/react";

const Comments = ({comments}) => {
  return (
    <Box>
      <Text fontWeight="bold" fontSize="xl" mt={6}>
        Comments
      </Text>
      {!comments && (
        <Text fontWeight="thin">No comment on this post yet.</Text>
      )}
      <FormControl py={4}>
        <Textarea mb={4} />
      </FormControl>
    </Box>
  );
};

export default Comments;
