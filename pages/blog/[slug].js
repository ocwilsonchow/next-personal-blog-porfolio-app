import { Flex, Text, Img, Center, Grid, GridItem } from "@chakra-ui/react";
import { apiGetBlogPost, apiGetBlogPostIds, apiGetBlogPosts } from "../../lib/blog";
import { useRouter } from "next/router";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import BlogMenu from "../../components/blog/BlogMenu";

const builder = imageUrlBuilder({
  projectId: "i3xzrnz1",
  dataset: "production",
});
function urlFor(source) {
  return builder.image(source);
}

export default function PageShowBlogPost({ post, posts }) {
  const router = useRouter();
  console.log(posts);

  if (router.isFallback) return <div>Loading...</div>;
  if (!post) return <div>This post does not exist.</div>;

  return (
    <Grid templateColumns="repeat(12, 1fr)">
      <GridItem colSpan={{ base: 0, lg: 2 }} borderRightWidth="1px" mr={2} display={{base: 'none', lg: 'block'}}>
        <BlogMenu posts={posts} />
      </GridItem>
      <GridItem colSpan={{ base: 12, lg: 10 }}>
        <Flex flexDir="column" h="100%" alignItems="center">
          <Img
            src={post?.mainImage?.asset?.url}
            width="300px"
            height="300px"
            objectFit="cover"
            alt=""
            borderRadius="md"
          />
          <Flex flexDir="column" alignItems="center" p={4} maxW="800px">
            <Text fontWeight="bold" fontSize="3xl" mb={2}>
              {post?.title}
            </Text>
            <BlockContent
              blocks={post.body}
              projectId="i3xzrnz1"
              dataset="production"
            />
          </Flex>
        </Flex>
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
  };
}
