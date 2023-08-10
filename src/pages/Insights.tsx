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
} from "@chakra-ui/react";

export const Eco = () => {
  const ChatSection = (props) => {
    return (
      <Box>
        <Text color="#B5B5B5" fontSize={"1rem"}>
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
          <InputGroup alignItems={"center"} display={"flex"} gap={3}>
            <Input bg="white" />
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
      <EcoDrawer />
    </Box>
  );
};
