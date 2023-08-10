import { ChatIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Slide,
  useDisclosure,
  InputGroup,
  Input,
  IconButton,
  Text,
  Flex,
  Link,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import { Chat } from "../components/Chat/Chat";

export const Eco = () => {
  const ChatSection = (props) => {
    return (
      <Box mb={"2rem"}>
        <Text color="#B5B5B5" fontSize={"1rem"} mb={"0.5rem"} fontWeight="bold">
          {props.title}
        </Text>
        {props.items.map((i) => (
          <Flex gap={3} alignItems={"center"} mb="0.5rem">
            <ChatIcon fontSize={"1.5rem"} />
            <Link fontSize={"1rem"} fontWeight={"light"}>
              {i}
            </Link>
          </Flex>
        ))}
      </Box>
    );
  };
  const { isOpen, onToggle } = useDisclosure();
  const EcoDrawer = () => {
    return (
      <Slide in={isOpen} direction="left">
        <Box
          marginTop="59px"
          overflowX={"scroll"}
          w={"100%"}
          bg="#303030"
          color="white"
          padding="1rem"
          h={"100%"}
        >
          <InputGroup
            mb={"1rem"}
            alignItems={"center"}
            display={"flex"}
            gap={3}
          >
            <Input
              bg="white"
              color="black"
              placeholder="Grow something new - start a new chat with Eco"
            />
            <IconButton
              p={0}
              aria-label="Close"
              variant={"unstyled"}
              onClick={onToggle}
            >
              <CloseIcon />
            </IconButton>
          </InputGroup>
          <ChatSection
            title="Recent"
            items={["Roses Cherry Tomatoes 🍅", "Roses Basil 🌿"]}
          />
          <ChatSection
            title="Your fruits"
            items={["Roses Blueberry", "Roses Lemon Tree 🍋"]}
          />
          <ChatSection
            title="Your veges"
            items={[
              "Roses Cucumber 🥒",
              "Roses Pumpkins 🎃",
              "Roses Cherry Tomatoes 🍅",
              "Roses Onions 🧅",
            ]}
          />
          <ChatSection title="Your herbs" items={["Roses Basil 🌿"]} />
          <ChatSection
            title="Your garden"
            items={["Gardening Supplies 🪴", "Soils, fertilisers and seeds 🌱"]}
          />
          <Flex
            marginY={"15rem"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image src="./Lemon.png" height={"8rem"} />
            <Heading textAlign={"center"} as="h1" fontSize={"1rem"}>
              Wanting to trade your produce?
            </Heading>
            <Text
              fontSize={"0.875rem"}
              textAlign={"center"}
              marginBottom={"1rem"}
            >
              Ask Eco to help you post your home grown goods to the Eco Market
              Place!
            </Text>
            <Flex gap={3} w="100%">
              <Button
                borderRadius={"1rem"}
                flex={1}
                bg={"white"}
                fontSize={"0.75rem"}
              >
                Let’s get trading!
              </Button>
              <Button
                borderRadius={"1rem"}
                flex={1}
                bg={"black"}
                color="white"
                fontSize={"0.75rem"}
              >
                I want to learn more
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Slide>
    );
  };

  return (
    <Box>
      <Flex
        fontSize={"1.5rem"}
        boxShadow={"lg"}
        bg="white"
        alignItems={"center"}
      >
        <IconButton
          display={"flex"}
          aria-label="Hamburger"
          variant={"unstyled"}
          fontSize={"1.5rem"}
          onClick={onToggle}
        >
          <HamburgerIcon />
        </IconButton>
        <Text fontSize={"1rem"}>Roses Cherry Tomatoes 🍅</Text>
      </Flex>
      <Chat />
      <EcoDrawer />
    </Box>
  );
};
