import { Badge, Center, Flex, Text, Image, useColorModeValue } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const PageBlogIndex = () => {
  const postBgColor = useColorModeValue('gray.100', 'gray.700')
  const [posts, setPosts] = useState();

  console.log(posts);

  // Get All Posts From Sanity
  useEffect(() => {
    if (!posts) {
      (async () => {
        try {
          const response = await fetch("api/db/getPosts");
          const data = await response.json();
          setPosts(data.data);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, []);

  return (
    <Flex flexDir="column">
      <Center mb={4} fontWeight="bold" fontSize="2xl">All Blogs</Center>
      {posts?.map((post) => (
        <Flex
          key={post.id}
          p={4}
          m={2}
          flexDir="column"
          maxW="500px"
          bg={postBgColor}
          borderRadius="md"
        >
          <Text fontWeight="bold" fontSize="xl">
            {post.title}
          </Text>

        </Flex>
      ))}
    </Flex>
  );
};

export default PageBlogIndex;
