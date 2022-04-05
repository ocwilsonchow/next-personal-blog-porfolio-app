import { Flex, HStack, Text, IconButton, Button, Code } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { FaGithub } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
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
      title: "Project",
      link: "/project",
    },
    {
      title: "Notes",
      link: "/notes",
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
        maxW="1200px"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Link href="/">
          <Code
            fontWeight="bold"
            bg="none"
            fontSize="2xl"
            cursor="pointer"
            _hover={{ color: "blue.400" }}
          >
            wilson_dev
          </Code>
        </Link>
        <Flex flexWrap="wrap" p={2}>
          <HStack spacing={3} mr={14} display={{ base: "none", md: "flex" }}>
            {menuItems.map((item, i) => (
              <Link href={item.link} key={i}>
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
            ))}
          </HStack>
          <HStack spacing={3}>
            <ColorModeSwitcher />
            <a href="https://github.com/ocwilsonchow/next-personal-blog-porfolio-app" target="_blank">
              <IconButton
              icon={<FaGithub />}
              size="sm"
              variant="outline"
              borderRadius="full"
            />
            </a>
            <IconButton
              icon={<AiFillMessage />}
              size="sm"
              borderRadius="full"
              variant="outline"
            />
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
