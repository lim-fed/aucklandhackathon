import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Navbar />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
