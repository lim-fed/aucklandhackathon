import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { routes } from "../../routes";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
export const Navigation: React.FC = () => {
  return (
    <>
      <Grid
        zIndex={1}
        gridTemplateColumns={"repeat(3,1fr)"}
        borderTop={"1px solid black"}
        bg="black"
        color="white"
      >
        {routes.map((i) => (
          <GridItem
            className="nav-item"
            as={NavLink}
            to={i.path}
            py={5}
            flexDir={"column"}
            borderLeft={"1px solid black"}
            colSpan={1}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mb={"0.25rem"}
            _hover={{ cursor: "pointer" }}
          >
            {i.icon}
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
