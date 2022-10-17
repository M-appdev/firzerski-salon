import React from "react";
import { Flex, Image } from "@chakra-ui/react";

export const Logo = () => {
  let image = require("../logo.jpg");
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"left"}
      width={"150px"}
      height={"100%"}
      borderRadius={"25px"}
      borderRight={"2px solid white"}
      paddingLeft={"40px"}
    >
      <Image width={"50px"} height={"50px"} borderRadius={"10px"} src={image} />
    </Flex>
  );
};
