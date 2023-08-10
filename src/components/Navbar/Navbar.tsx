import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Slide,
} from "@chakra-ui/react";

import { routes } from "../../routes";
import { Link } from "react-router-dom";
import { BsBell, BsGear } from "react-icons/bs";

export const Navbar = () => {
  const { isOpen } = useDisclosure();
  return (
    <Box>
      <Flex
        bg={"black"}
        color={"white"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justifyContent={"center"}
      >
        <IconButton
          flex={1}
          icon={<BsGear w={5} h={5} />}
          variant={"unstyled"}
          aria-label={"Toggle Navigation"}
        />
        <Text
          flex={1}
          textAlign={useBreakpointValue({ base: "center", md: "left" })}
          fontFamily={"heading"}
          color={"white"}
        >
          Logo
        </Text>
        <IconButton
          flex={1}
          display="flex"
          justifyContent={"right"}
          variant={"unstyled"}
          icon={<BsBell w={5} h={5} />}
          aria-label={"Toggle Navigation"}
        />
      </Flex>
      <Slide in={isOpen} direction="left" style={{ top: "60px" }}>
        <MobileNav />
      </Slide>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {routes.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, path, icon }: NavItem) => {
  return (
    <Stack spacing={4}>
      <Box
        py={2}
        as={Link}
        to={path ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {icon ? icon : label}
        </Text>
      </Box>
    </Stack>
  );
};

interface NavItem {
  label: string;
  path?: string;
  icon?: React.ReactElement;
}
