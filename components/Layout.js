import React from "react";
import Navbar from "./Navbar";
import { Flex, VStack } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Flex flexDir="column" h="100vh">
      <Navbar />
      <Flex justifyContent="center" p={2}>
        <Flex maxW="1200px">{children}</Flex>
      </Flex>
    </Flex>
  );
};

export default Layout;
