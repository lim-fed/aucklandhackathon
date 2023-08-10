import { Box, Flex, Text } from "@chakra-ui/react";

const chats = [
  {
    time: "10:31pm",
    message:
      "Good morning, Rose. Your cherry tomatoes will start to flower in the next few days! Time to give it a cup of water 💧",
    sentFromUser: false,
  },
  { time: "10:32pm", message: "Doing it now, thanks!", sentFromUser: true },
  {
    time: "10:33pm",
    message:
      "Good afternoon, Rose. How are your cherry tomatoes looking today? Send through a photo.",
    sentFromUser: false,
  },
  {
    time: "10:33pm",
    message: "Sure! They started flowering yesterday.",
    sentFromUser: true,
  },
];
export const Chat = () => {
  return (
    <Box>
      {chats.map((item) => (
        <Flex
          gap={3}
          justifyContent={"space-between"}
          p={"1rem"}
          alignItems={"center"}
          flexDir={item.sentFromUser ? "row" : "row-reverse"}
        >
          <Text>{item.time}</Text>
          <Box
            p={"1rem"}
            boxShadow={"lg"}
            borderRadius={"1rem"}
            border={item.sentFromUser ? "1px solid #B8B8B8" : "none"}
            bg={item.sentFromUser ? "white" : "#FAAE2B"}
          >
            {item.message}
          </Box>
        </Flex>
      ))}
    </Box>
  );
};
