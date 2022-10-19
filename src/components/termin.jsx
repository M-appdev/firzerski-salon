import React, { useState } from "react";
import { Flex, Image, Text, Box } from "@chakra-ui/react";
import {
  CalendarIcon,
  ChevronDownIcon,
  CheckIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import { MyModal } from "./modal";

export const Termin = ({ data, popunjeniTermini }) => {
  console.log('popunjeniTermini', popunjeniTermini)
  let terminSlobodan = true;
  if (popunjeniTermini.length > 0) {
    // console.log("popunjeniTermini", data.radnik, popunjeniTermini);
    popunjeniTermini?.map((termin) => {
      if (data.vrijeme === termin.Termin) {
        terminSlobodan = false;
      }
    });
  }
  const [isOpen, setisOpen] = useState(false);
  const onClose = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <Flex
        h={"100px"}
        margin={"5px 54px"}
        bgColor={"#E1EEC3"}
        borderRadius={"20px"}
        padding={"10px"}
        alignItems={"center"}
        cursor={`${terminSlobodan && "pointer"}`}
        onClick={() => {
          terminSlobodan && setisOpen(true);
        }}
      >
        <Flex
          height={"100%"}
          borderRadius={"25px"}
          borderRight={"2px solid white"}
          borderLeft={"2px solid white"}
          alignItems={"center"}
          paddingLeft="20px"
          paddingRight="20px"
        >
          <Text
            w={"40px"}
            h={"40px"}
            fontSize={"20px"}
            textAlign={"center"}
            pt={"5px"}
            bgColor={"white"}
            borderRadius={"9px"}
            fontWeight={"600"}
          >
            {data.id}
          </Text>
        </Flex>
        <Text
          fontSize={"40px"}
          fontWeight={"600"}
          paddingLeft="20px"
          w={"280px"}
        >
          {data.vrijeme}
        </Text>

        {terminSlobodan ? (
          <>
            <Text
              fontSize={"20px"}
              fontWeight={"600"}
              paddingLeft="20px"
              width={"fit-content"}
            >
              <span style={{ paddingRight: "20px" }}>
                <CheckIcon color={"green"} />
              </span>
              Termin slobodan
            </Text>
          </>
        ) : (
          <>
            <Text fontSize={"20px"} fontWeight={"600"} paddingLeft="20px">
              <span style={{ paddingRight: "20px" }}>
                <CloseIcon color={"red"} />
              </span>
              Termin je popunjen
            </Text>
          </>
        )}
      </Flex>
      <MyModal isOpen={isOpen} onClose={onClose} data={data} />
    </>
  );
};
