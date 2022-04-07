import { Flex, Alert } from "@chakra-ui/react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Flex flexDir="column">
      <Hero />
    </Flex>
  );
}
