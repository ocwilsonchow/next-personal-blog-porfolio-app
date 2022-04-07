import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import moment from "moment";

const Comments = ({ comments }) => {
  return (
    <Flex flexDir="column">
      <Text fontWeight="bold" fontSize="xl" mt={6} mb={2}>
        Comments
      </Text>
      {comments.length == 0 && (
        <Text fontWeight="thin">No comment on this post yet.</Text>
      )}
      {comments.map((comment) => (
        <Flex flexDir="column" borderWidth="1px" p={2} borderRadius="md">
          <Text>{comment.comment}</Text>
          <Text fontSize="xs" color="gray.500" isTruncated>
            {moment(comment.publishedAt).calendar()} by {comment.username}
          </Text>
        </Flex>
      ))}
      <FormControl py={4}>
        <Textarea />
      </FormControl>
      <Button>Comment</Button>
    </Flex>
  );
};

export default Comments;
