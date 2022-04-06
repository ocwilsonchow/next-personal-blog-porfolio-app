import {
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
    <>
      {posts?.map((post, i) => (
        <Link href={`/blog/${post.slug.current}`} key={i}>
          <Button variant="link" py={2} fontWeight="bold" my={1}>
            {post.title}
          </Button>
        </Link>
      ))}
    </>
  );
};

export default BlogMenu;
