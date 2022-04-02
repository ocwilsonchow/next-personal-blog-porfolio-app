import React from 'react'
import { Center, Flex, Text } from "@chakra-ui/react";
import Posts from '../../components/blog/posts';

const index = () => {
  return (
    <Flex flexDir="column" p={4}>
      <Text fontSize="4xl" fontWeight="bold" textAlign="center">
        Blog Page still in development.
      </Text>
      <Posts />
    </Flex>
  )
}

export default index
