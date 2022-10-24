import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { CalendarIcon, ArrowRightIcon } from "@chakra-ui/icons";

export const Radnik = ({ ime ,slika}) => {

  return (
    <Flex
      width="300px"
      height="100%"
      alignItems={"center"}
      justifyContent={"flex-start"}
      padding={"10px"}
      cursor={"pointer"}
    >
      <Image
        width={"40px"}
        height={"40px"}
        borderRadius={"25px"}
        src={
          slika
        }
      />
      <Flex flexDir={"column"} height={"fit-content"} paddingLeft={"25px"}>
        <Text fontSize={"20px"} fontWeight={"600"} >
          {ime}
        </Text>
      </Flex>
      <ArrowRightIcon
      pt={"5px"}
        width={"fit-content"}
        paddingLeft={"10px"}
        w={20}
        h={20}
        color={"black"}
      />
    </Flex>
  );
};
