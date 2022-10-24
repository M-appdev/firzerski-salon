import React, { useEffect, useState } from "react";
import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { Radnik } from "./radnik";
import { Logo } from "./logo";
import { NavKalendar } from "./nav-kalendar";

const Header = ({
  setShowRadnikDP,
  setShowRadnikJK,
  setShowRadnikMK,
  showRadnikMK,
  showRadnikJK,
  showRadnikDP,
  setShowTable,
}) => {
  let darko = require("../../src/darko.jpg");
  let jovana = require("../../src/jovana.jpg");
  let milan = require("../../src/milan.jpg");

  return (
    <Flex
      borderTopRadius={"20px"}
      height={"100px"}
      alignItems={"center"}
      justifyContent={"left"}
      backgroundColor={"#ECC8AE"}
    >
      <Logo />

      <a
        onClick={() => {
          if (showRadnikMK) {
            setShowRadnikJK(true);
            setShowRadnikMK(false);
          } else if (showRadnikJK) {
            setShowRadnikJK(false);
            setShowRadnikDP(true);
          } else {
            setShowRadnikDP(false);
            setShowRadnikMK(true);
          }
        }}
      >
        {showRadnikJK ? (
          <Flex justify={"center"} align={"center"}>
            <Text fontSize={"20px"} fontWeight={"600"} paddingLeft={"50px"}>
              Frizer:
            </Text>
            <Radnik ime={"Jovana Kajmakovic"} slika={jovana} />
          </Flex>
        ) : showRadnikMK ? (
          <Flex justify={"center"} align={"center"}>
            <Text fontSize={"20px"} fontWeight={"600"} paddingLeft={"50px"}>
              Frizer:
            </Text>
            <Radnik ime={"Milan Krunic"} slika={milan}></Radnik>
          </Flex>
        ) : (
          showRadnikDP && (
            <Flex justify={"center"} align={"center"}>
              <Text fontSize={"20px"} fontWeight={"600"} paddingLeft={"50px"}>
                Frizer:
              </Text>
              <Radnik ime={"Darko Petkovic"} slika={darko}></Radnik>{" "}
            </Flex>
          )
        )}
      </a>
      <NavKalendar />

      <Link
        fontSize={"26px"}
        fontWeight={"600"}
        paddingLeft={"50px"}
        textAlign={"center"}
        onClick={()=>setShowTable(true)}
        cursor={"pointer"}
      >
        Prikazi tabelu
      </Link>
    </Flex>
  );
};
export default Header;
