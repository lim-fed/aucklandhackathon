import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { routes } from "./routes";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {routes.map((i, idx) => (
            <Route
              key={`${idx}-${i.label}`}
              path={i.path}
              element={i.element}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
