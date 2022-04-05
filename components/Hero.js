import React from "react";
import {
  Badge,
  Button,
  Center,
  Flex,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Devdesk from "../images/devTransparent.png";
import Link from "next/link";

const Hero = () => {
  return (
    <Flex p={2}>
      <Flex alignItems="center">
        <Flex flexDir="column" p={8}>
          <Text
            fontWeight="bold"
            fontSize={{ base: "2xl", md: "4xl" }}
            textAlign="center"
          >
            Launching Soon.
          </Text>
          <Text
            fontWeight="thin"
            fontSize={{ base: "sm", md: "lg" }}
            textAlign="center"
          >
            This site is replacing the old one.
          </Text>
          <Text
            fontWeight="thin"
            fontSize={{ base: "sm", md: "lg" }}
            textAlign="center"
          >
           Expected in mid-April 2022.
          </Text>
          <Link href="/about">
            <Button
              mt={8}
              fontWeight="bold"
              size="lg"
              variant="outline"
              borderRadius="full"
            >
              Discover More
            </Button>
          </Link>
        </Flex>
        <Flex>
          <Image src={Devdesk} width="500px" height="500px" />
        </Flex>
      </Flex>{" "}
    </Flex>
  );
};

export default Hero;
