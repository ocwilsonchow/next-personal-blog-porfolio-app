import {
  Badge,
  Center,
  Flex,
  Image,
  Spinner,
  Text,
  LinkBox,
} from "@chakra-ui/react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({
  projectId: "i3xzrnz1",
  dataset: "production",
});
function urlFor(source) {
  return builder.image(source);
}

const SinglePost = ({ post }) => {
  return (
    <LinkBox
      my={2}
      borderWidth="1px"
      borderRadius="md"
      maxW="sm"
      p={4}
      alignItems="center"
    >
      <Flex flexDir="column" h="100%">
        <Image
          src={post.mainImage.asset.url}
          boxSize="full"
          objectFit="cover"
          mb={3}
        />
        <Flex>
          <Image
            src={urlFor(post.authorImage).url()}
            boxSize="50px"
            mr={2}
            borderRadius="full"
          />

          <Flex flexDir="column" justifyContent="center">
            <Text fontWeight="bold" fontSize="lg">
              {post.title}
            </Text>
            <Text fontSize="xs" color="gray.500">
              Created on {new Date(post.publishedAt).toLocaleDateString()} by{" "}
              {post.author}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </LinkBox>
  );
};

export default SinglePost;
