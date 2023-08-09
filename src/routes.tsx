import { Icon } from "@chakra-ui/react";
import { PiLightbulb } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Insights } from "./pages/Insights";
export const routes = [
  {
    label: "Marketplace",
    path: "/",
    element: <Home />,
    icon: <Icon as={BsPerson} fontSize={"1.2rem"} />,
  },
  {
    label: "Insights",
    path: "/insights",
    element: <Insights />,
    icon: <Icon as={PiLightbulb} fontSize={"1.2rem"} />,
  },
  {
    label: "Profile",
    path: "/profile",
    element: <Profile />,
    icon: <Icon as={AiOutlineHome} fontSize={"1.2rem"} />,
  },
];
