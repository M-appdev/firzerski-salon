import React, { useEffect, useState } from "react";
import { Flex, Image } from "@chakra-ui/react";
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
          <Radnik ime={"Jovana Kajmakovic"} slika={jovana} />
        ) : showRadnikMK ? (
          <Radnik ime={"Milan Krunic"} slika={milan}></Radnik>
        ) : (
          showRadnikDP && <Radnik ime={"Darko Petkovic"} slika={darko}></Radnik>
        )}
      </a>
      <NavKalendar />
    </Flex>
  );
};
export default Header;
