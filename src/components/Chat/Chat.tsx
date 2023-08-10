import { Box, Flex, Image, Text } from "@chakra-ui/react";

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
  {
    time: "10:33pm",
    image: "./tomato.png",
    sentFromUser: true,
  },
  {
    time: "10:33pm",
    message:
      "They are looking great! Give the plant one cup of water today and leave it in the sun.",
    sentFromUser: false,
  },
  {
    time: "10:33pm",
    message:
      "These should be ready to eat in four weeks time. Would you like me to schedule a Market Place post for your excess tomatoes?",
    sentFromUser: false,
  },
  {
    time: "10:33pm",
    message:
      "Yes please!! I would love to swap my excess tomatoes for some fresh basil :)",
    sentFromUser: true,
  },
  {
    time: "10:33pm",
    message:
      "Great! I have scheduled your Market Place post for August 31st. This can be edited or removed any time via your profile.",
    sentFromUser: false,
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
          {item.message && (
            <Box
              p={"1rem"}
              boxShadow={"lg"}
              borderRadius={"1rem"}
              border={item.sentFromUser ? "1px solid #B8B8B8" : "none"}
              bg={item.sentFromUser ? "white" : "#FAAE2B"}
            >
              {item.message}
            </Box>
          )}
          {item.image && <Image src={item.image} w="80%" />}
        </Flex>
      ))}
    </Box>
  );
};
