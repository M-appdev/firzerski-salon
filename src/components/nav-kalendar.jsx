import React, { useEffect, useState } from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { CalendarIcon, ChevronDownIcon, ChekmarkIcon } from "@chakra-ui/icons";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const NavKalendar = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarValue, setCalendarValue] = useState(new Date());
  return (
    <div>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        padding={"0 62px"}
        cursor={"pointer"}
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <CalendarIcon w={30} h={30} color={"black"} />
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          paddingLeft={"30px"}
        >
          <Text fontSize={20} fontWeight={500}>
            Datum:
          </Text>
          <Text fontWeight={700} textDecor={"underline"}>
            {calendarValue.toDateString()}
          </Text>
        </Flex>
        <ChevronDownIcon
          width={"fit-content"}
          paddingLeft={"20px"}
          w={30}
          h={30}
          color={"black"}
        />
      </Flex>
      {showCalendar && (
        <div
          style={{ position: "absolute", top: "30px", right: "100px" }}
          onClick={() => {
            setTimeout(() => {
              setShowCalendar(false);
            }, 50);
          }}
        >
          <Calendar
            value={calendarValue}
            onChange={(value) => {
              setCalendarValue(value);
            }}
          />
        </div>
      )}
    </div>
  );
};
