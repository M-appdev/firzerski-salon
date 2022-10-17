import React, { useEffect, useState } from "react";
import { Flex, Image } from "@chakra-ui/react";
import { Radnik } from "./radnik";
import { Logo } from "./logo";
import { NavKalendar } from "./nav-kalendar";

const Header = ({setShowRadnikDP,setShowRadnikJK,setShowRadnikMK,showRadnikMK,showRadnikJK,showRadnikDP}) => {
  return (
    <Flex
      borderTopRadius={"20px"}
      height={"100px"}
      alignItems={"center"}
      justifyContent={"left"}
      backgroundColor={"#ECC8AE"}
    >
      <Logo />
      <div
        onClick={() => {
          if (showRadnikJK) {
            setShowRadnikMK(true);
            setShowRadnikJK(false);
          } else if (showRadnikMK) {
            setShowRadnikMK(false);
            setShowRadnikDP(true);
          } else {
            setShowRadnikJK(true);
            setShowRadnikDP(false);
          }
        }}
      >
        {showRadnikJK ? (
          <Radnik
            ime={"Jovana Kajmakovic"}
            slika={
              "https://scontent.ftzl1-1.fna.fbcdn.net/v/t1.6435-9/177275652_270491581414002_895886327439559379_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=oCf9HJ_lQ_UAX_THAQG&_nc_ht=scontent.ftzl1-1.fna&oh=00_AT_zJn2qqJYrvL8kAqF30zsZ1jNKG8HYvYhUn_ksAjNGuA&oe=635F74B4"
            }
          />
        ) : showRadnikMK ? (
          <Radnik
            ime={"Milan Krunic"}
            slika={
              "https://scontent.ftzl1-1.fna.fbcdn.net/v/t31.18172-8/14380098_1114306741991279_193087456733583169_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=f5vMQgWnK9wAX8DHWmI&_nc_ht=scontent.ftzl1-1.fna&oh=00_AT8_QQz27SH1H1OhZu_XQm9HOhyFsPURXFT9LQj3tadyoQ&oe=635CC6C8"
            }
          ></Radnik>
        ) : (
          showRadnikDP && (
            <Radnik
              ime={"Darko Petkovic"}
              slika={
                "https://scontent.ftzl1-1.fna.fbcdn.net/v/t39.30808-6/244977058_4311682935615358_98296685016258401_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5Y2Z5xntWJ4AX9JdiTT&_nc_ht=scontent.ftzl1-1.fna&oh=00_AT_TyB7lvrn-YijSNVg_3RiWCpbAgj3WswLpXp9TIQ34xQ&oe=633D6170"
              }
            ></Radnik>
          )
        )}
      </div>
      <NavKalendar />
    </Flex>
  );
};
export default Header;
