import { InputLeftElement, Box, Icon } from "@chakra-ui/react";
import { InputGroup, InputRightElement, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { GiSettingsKnobs } from "react-icons/gi";
import { Post } from "../components/Post/Post";
const posts = [
  {
    userName: "Dwayne",
    description:
      "Hey Ecocers! I have three large bunches of fresh basil, wanting to swap this for some delicious lemons or limes. Let me know!",
    profileImage: "./profiles/Lily.jpg",
    postImage: "./posts/basil.png",
  },
  {
    userName: "Terry",
    description:
      "Hey everyone! I am going away for the next few weeks so won’t be using my home grown agria potatoes - free to a good home!! First in first served wink 😉",
    profileImage: "./profiles/terry.png",
    postImage: "./posts/potato.png",
  },
];
export const Home = () => {
  return (
    <Box bg="gray.100">
      <InputGroup position={"absolute"} p="1rem" bg="white">
        <InputLeftElement m="1rem">
          <SearchIcon />
        </InputLeftElement>
        <InputRightElement m="1rem" pointerEvents="none">
          <Icon transform={"rotate(90deg)"} as={GiSettingsKnobs} />
        </InputRightElement>
        <Input
          bg="white"
          boxShadow={"lg"}
          borderRadius={"100px"}
          placeholder="Search"
        />
      </InputGroup>
      <Box pt="5rem">
        {posts.map((item) => (
          <Post {...item} />
        ))}
      </Box>
    </Box>
  );
};
