import { Flex, Image } from "@chakra-ui/react";
import ProfilePicture from "../../Images/Dwayne-Johnson.jpg";
import PostImage from "../../Images/Post.png";
import { Box, Text } from "@chakra-ui/react";
import { BsBookmark, BsHeart, BsShare } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
export const Post = () => {
  return (
    <Box mb="1rem">
      <Flex alignItems={"center"} gap={3} marginBottom={"0.5rem"}>
        <Image src={ProfilePicture} height={"3rem"} borderRadius={"100%"} />
        Lily
      </Flex>
      <Image src={PostImage} marginBottom={"1rem"} />
      <Flex gap={3} fontSize={"2rem"} mb="0.5rem">
        <BsHeart />
        <AiOutlineComment />
        <BsShare />
        <BsBookmark />
      </Flex>
      <Text fontWeight={"light"} color="gray.600">
        Hey Ecocers! I have three large bunches of fresh basil, wanting to swap
        this for some delicious lemons or limes. Let me know!
      </Text>
    </Box>
  );
};
