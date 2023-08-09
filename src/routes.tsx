import { Icon } from "@chakra-ui/react";
import { PiLightbulb } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
export const routes = [
  {
    label: "Marketplace",
    path: "/",
    element: <div>This is the landing page</div>,
    icon: <Icon as={BsPerson} fontSize={"1.2rem"} />,
  },
  {
    label: "Insights",
    path: "/insights",
    element: <div>Insights</div>,
    icon: <Icon as={PiLightbulb} fontSize={"1.2rem"} />,
  },
  {
    label: "Profile",
    path: "/profile",
    element: <div>Profile</div>,
    icon: <Icon as={AiOutlineHome} fontSize={"1.2rem"} />,
  },
];
