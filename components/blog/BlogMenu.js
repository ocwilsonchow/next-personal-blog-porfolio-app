import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Spinner,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";

const BlogMenu = ({ posts }) => {
  return (
    <>
      <Box>
        <Link href="/blog">
          <Button variant="link" py={2} fontWeight="extrabold" my={1}>
            Home
          </Button>
        </Link>
      </Box>

      <Box>
        {posts?.map((post, i) => (
          <Link href={`/blog/${post.slug.current}`} key={i}>
            <Button variant="link" py={2} fontWeight="bold" color="gray.400" my={1}>
              {post.title}
            </Button>
          </Link>
        ))}
      </Box>
    </>
  );
};

export default BlogMenu;
