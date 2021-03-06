import React from "react";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="sm"
      variant="outline"
      borderRadius="full"
      aria-label={`Switch to ${text} mode`}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
      transition="all ease 0.2s"
    />
  );
};
