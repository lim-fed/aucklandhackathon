import { Flex, Image } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import { BsBookmark, BsHeart } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";
const IconText = (props) => {
  return (
    <Flex alignItems={"center"} flexDir={"column"}>
      {props.icon}
      <Text fontSize={"0.75rem"}>{props.text}</Text>
    </Flex>
  );
};
export const Post = (props: {
  userName: string;
  description: string;
  profileImage: string;
  postImage: string;
}) => {
  return (
    <Box mb="0.5rem" bg="white" p="0.5rem">
      <Flex alignItems={"center"} gap={3} marginBottom={"0.5rem"}>
        <Image
          src={props.profileImage}
          height={"3rem"}
          width={"3rem"}
          objectFit={"cover"}
          borderRadius={"100%"}
        />
        {props.userName}
      </Flex>
      <Image src={props.postImage} marginBottom={"0.5rem"} />
      <Text fontWeight={"light"} color="gray.600" mb={"1rem"}>
        {props.description}
      </Text>
      <Flex
        px={3}
        fontSize={"2rem"}
        mb="0.5rem"
        justifyContent={"space-between"}
      >
        <IconText icon={<BsHeart />} text="Like" />
        <IconText icon={<AiOutlineComment />} text="Comment" />
        <IconText icon={<BsBookmark />} text="Save" />
        <IconText icon={<MdOutlineLocalOffer />} text="Make an offer" />
      </Flex>
    </Box>
  );
};
