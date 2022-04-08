import { useState } from "react";
import {
  Flex,
  Text,
  Img,
  Center,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import {
  apiGetBlogPost,
  apiGetBlogPostIds,
  apiGetBlogPosts,
} from "../../lib/blog";
import { useRouter } from "next/router";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import BlogMenu from "../../components/blog/BlogMenu";
import Comments from "../../components/blog/Comments";
import moment from "moment";

const builder = imageUrlBuilder({
  projectId: "i3xzrnz1",
  dataset: "production",
});
function urlFor(source) {
  return builder.image(source);
}

export default function PageShowBlogPost({ post, posts }) {
  const router = useRouter();
  console.log(post)
  if (router.isFallback) return <div>Loading...</div>;
  if (!post) return <div>This post does not exist.</div>;

  const components = {
    block: {
      h3: ({ children }) => (
        <Text fontWeight="bold" fontSize="2xl">
          {children}
        </Text>
      ),
    },
  };

  return (
    <Grid templateColumns="repeat(12, 1fr)">
      <GridItem
        colSpan={{ base: 0, lg: 2 }}
        borderRightWidth="1px"
        mr={2}
        px={3}
        display={{ base: "none", lg: "block" }}
        w="200px"
      >
        <BlogMenu posts={posts} />
      </GridItem>
      <GridItem colSpan={{ base: 12, lg: 10 }}>
        <Grid templateColumns="repeat(10, 1fr)">
          <GridItem colSpan={{ base: 10, md: 7 }} p={6}>
            <VStack alignItems="start" spacing={4}>
              <Text fontWeight="bold" fontSize="4xl">
                {post?.title}
              </Text>
              <Text fontSize="xs" color="gray.500" mb={4}>
                {moment(post.publishedAt).calendar()}
              </Text>
              <PortableText value={post.body} components={components} />
            </VStack>
          </GridItem>
          <GridItem colSpan={{ base: 10, md: 3 }} p={6} borderLeftWidth="1px">
            <Img
              src={post?.mainImage?.asset?.url}
              objectFit="cover"
              alt=""
              borderRadius="md"
            />

            <Flex flexDir="column">
              <Comments comments={post.relatedComments} />
            </Flex>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
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
  const posts = await apiGetBlogPosts();
  return {
    props: {
      post,
      posts,
    },
    revalidate: 60
  };
}
