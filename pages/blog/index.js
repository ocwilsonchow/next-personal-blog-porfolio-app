import { Center, Flex, Spinner } from "@chakra-ui/react";
import SinglePost from "../../components/SinglePost";
import {apiGetBlogPosts} from "../../lib/blog";


export default function PageBlogIndex({posts}) {
  return (
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
  );
};

export async function getStaticProps () {
  const posts = await apiGetBlogPosts()
  return {
    props: {
      posts
    }
  }
}
