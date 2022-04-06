import { Flex, Text, Img } from "@chakra-ui/react";
import { apiGetBlogPost, apiGetBlogPostIds } from "../../lib/blog";
import { useRouter } from "next/router";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({
  projectId: "i3xzrnz1",
  dataset: "production",
});
function urlFor(source) {
  return builder.image(source);
}

export default function PageShowBlogPost({ post }) {
  const router = useRouter();
  console.log(post);

  if (router.isFallback) return <div>Loading...</div>;
  if (!post) return <div>This post does not exist.</div>;

  return (
    <Flex flexDir="column" h="100%">
      <Img
        src={post?.mainImage?.asset?.url}
        width="300px"
        height="300px"
        objectFit="cover"
        mb={3}
        alt=""
      />
      <Flex alignItems="center">
        <Flex flexDir="column" justifyContent="center">
          <Text fontWeight="bold" fontSize="3xl">
            {post?.title}
          </Text>
        </Flex>
      </Flex>
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
