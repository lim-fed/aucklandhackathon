import { Icon } from "@chakra-ui/react";
import { BsChat, BsHouse, BsPerson } from "react-icons/bs";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Eco } from "./pages/Insights";
export const routes = [
  {
    label: "Marketplace",
    path: "/",
    element: <Home />,
    icon: <Icon as={BsHouse} fontSize={"1.2rem"} />,
  },
  {
    label: "Insights",
    path: "/insights",
    element: <Eco />,
    icon: <Icon as={BsChat} fontSize={"1.2rem"} />,
  },
  {
    label: "Profile",
    path: "/profile",
    element: <Profile />,
    icon: <Icon as={BsPerson} fontSize={"1.2rem"} />,
  },
];
