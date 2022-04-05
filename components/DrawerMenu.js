import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

const DrawerMenu = () => {
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
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<FiMenu />}
        variant="outline"
        size="sm"
        borderRadius="full"
      ></MenuButton>
      <MenuList>
        {menuItems.map((item, i) => (
          <Link href={item.link} key={i}>
            <MenuItem>{item.title}</MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DrawerMenu;
