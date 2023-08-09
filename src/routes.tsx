import { Icon } from "@chakra-ui/react";
import { FaShoppingBag } from "react-icons/fa";
export const routes = [
  {
    label: "Marketplace",
    path: "/",
    element: <div>This is the landing page</div>,
    icon: <Icon as={FaShoppingBag} fontSize={"1.2rem"} />,
  },
  {
    label: "Insights",
    path: "/insights",
    element: <div>Insights</div>,
  },
  {
    label: "Profile",
    path: "/profile",
    element: <div>Profile</div>,
  },
];
