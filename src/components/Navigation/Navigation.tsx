import { Grid, GridItem, Text, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { routes } from "../../routes";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
export const Navigation: React.FC = () => {
  return (
    <>
      <Flex justifyContent={"center"}>
        <Button
          borderRadius={"100%"}
          h={"60px"}
          w={"60px"}
          bg="white"
          border="1px solid black"
          display={"flex"}
          flexDir={"column"}
          position="absolute"
          marginTop={"-3rem"}
        >
          <Text fontSize={"1.5rem"}>+</Text>
          <Text>Add</Text>
        </Button>
      </Flex>
      <Grid gridTemplateColumns={"repeat(3,1fr)"} borderTop={"1px solid black"}>
        {routes.map((i) => (
          <GridItem
            className="nav-item"
            as={NavLink}
            to={i.path}
            p={3}
            flexDir={"column"}
            borderLeft={"1px solid black"}
            colSpan={1}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {i.icon}
            <Text>{i.label}</Text>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
