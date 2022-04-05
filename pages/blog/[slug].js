import { Flex, Text } from "@chakra-ui/react";
import { apiGetBlogPost, apiGetBlogPostIds } from "../../lib/blog";
import { useRouter } from "next/router";

export default function PageShowBlogPost({ post }) {
  const router = useRouter();
  console.log(post);

  if (router.isFallback) return <div>Loading...</div>;
  if (!post) return <div>This post does not exist.</div>;

  return (
    <Flex flexDir="column">
      <Text fontWeight="bold" fontSize="4xl">{post.title}</Text>
    </Flex>
  );
}

export async function getStaticPaths() {
  const paths = await apiGetBlogPostIds();
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = await apiGetBlogPost(params.slug);

  return {
    props: {
      post,
    },
  };
}
