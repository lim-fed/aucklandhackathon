import { Heading, InputLeftElement, Box, Icon } from "@chakra-ui/react";
import { InputGroup, InputRightElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { GiSettingsKnobs } from "react-icons/gi";
import { Post } from "../components/Post/Post";
export const Home = () => {
  return (
    <Box>
      <InputGroup position={"absolute"} px="1rem" mt="1rem">
        <InputLeftElement ms="1rem">
          <SearchIcon />
        </InputLeftElement>
        <InputRightElement me="1rem" pointerEvents="none">
          <Icon transform={"rotate(90deg)"} as={GiSettingsKnobs} />
        </InputRightElement>
        <Input
          bg="white"
          boxShadow={"lg"}
          borderRadius={"100px"}
          placeholder="Search"
        />
      </InputGroup>
      <Box p="1rem" pt="4rem">
        <Heading as="h1">Kia ora Rose</Heading>
        <Post />
        <Post />
      </Box>
    </Box>
  );
};
