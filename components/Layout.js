import React from "react";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import { Flex } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Flex flexDir="column" h="100vh" position="relative">
      <Navbar />
      <Flex justifyContent="center" p={4} justifyContent="center">
        <Flex maxW="1000px">{children}</Flex>
      </Flex>
    </Flex>
  );
};

export default Layout;
