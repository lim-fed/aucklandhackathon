import * as React from "react";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { routes } from "./routes";
import { Navigation } from "./components/Navigation/Navigation";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Flex
          h={"100vh"}
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          <Navbar />
          <Box h={"100%"} overflowY={"scroll"}>
            <Routes>
              {routes.map((i, idx) => (
                <Route
                  key={`${idx}-${i.label}`}
                  path={i.path}
                  element={i.element}
                />
              ))}
            </Routes>
          </Box>
          <Navigation />
        </Flex>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
