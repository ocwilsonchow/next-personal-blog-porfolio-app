import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const BlogMenu = ({posts}) => {
  return (
    <Box p={2}>
      {posts?.map((post, i) => (
        <Link href={`/blog/${post.slug.current}`} key={i}>
          <Button variant="link" py={2} fontWeight="bold" my={1}>
            {post.title}
          </Button>
        </Link>
      ))}
    </Box>
  );
};

export default BlogMenu;
