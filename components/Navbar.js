import { Flex, HStack, Text, IconButton, Button, Code } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const menuItems = [
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Aspirations",
      link: "/aspirations",
    },
    {
      title: "Gallery",
      link: "/gallery",
    },
  ];

  return (
    <Flex w="100%" p={4} justifyContent="center">
      <Flex
        w="100%"
        maxW="1000px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href="/">
          <Code fontWeight="bold" bg="none" fontSize="2xl">
            wilson_dev
          </Code>
        </Link>
        <Flex p={2}>
          <HStack spacing={5} mr={10}>
          {
            menuItems.map((item=> (
              <Link href={item.link}>
              <Button
                size="sm"
                fontSize="xs"
                variant="outline"
                borderRadius="full"
                fontWeight="bold"
              >
                {item.title}
              </Button>
            </Link>
            )))
          }
          </HStack>
          <HStack spacing={2}>
            <ColorModeSwitcher />
            <IconButton
              icon={<FaGithub />}
              size="sm"
              variant="outline"
              mr={1}
              borderRadius="full"
            />
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
