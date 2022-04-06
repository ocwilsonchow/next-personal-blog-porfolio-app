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
import BlogMenu from "../../components/blog/BlogMenu";
import SinglePost from "../../components/SinglePost";
import { apiGetBlogPosts } from "../../lib/blog";

export default function PageBlogIndex({ posts }) {
  console.log(posts);
  return (
    <Grid templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={{ base: 0, lg: 2 }} borderRightWidth="1px" mr={2}  display={{base: 'none', lg: 'block'}} >
        <BlogMenu posts={posts} />
      </GridItem>
      <GridItem colSpan={{ base: 12, lg: 10 }}>
        <Flex flexDir="column" alignItems="center" pb={10}>
          <Center mb={4} fontWeight="bold" fontSize="3xl">
            Blog Posts
          </Center>
          <Flex flexDir="column" justifyContent="center">
            {!posts && (
              <Center p={6}>
                <Spinner />
              </Center>
            )}
            <Flex flexWrap="wrap" justifyContent="center">
              {posts?.map((post, i) => (
                <Flex key={i} m={1.5}>
                  <SinglePost post={post} i={i} />
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export async function getStaticProps() {
  const posts = await apiGetBlogPosts();
  return {
    props: {
      posts,
    },
  };
}
