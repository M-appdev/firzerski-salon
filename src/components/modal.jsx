import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Text,
  Box,
  Input,
} from "@chakra-ui/react";
import instance from "../api/axios";
export const MyModal = ({ isOpen, onClose, data }) => {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          padding={"20px"}
          width={"600px"}
          backgroundColor={"white"}
          justifyContent={"space-between"}
          borderTopRadius={"30px"}
        >
          <ModalHeader
            w={"300px"}
            flex={1}
            display={"flex"}
            alignItems={"center"}
          >
            <span
              style={{ width: "300px", fontSize: "20px", fontWeight: "600" }}
            >
              Termin: {data.vrijeme}
            </span>
          </ModalHeader>
          <ModalCloseButton
            borderRadius={"25px"}
            height={"35px"}
            width={"35px"}
            backgroundColor={"#ECC8AE"}
            border={"1px solid #ECC8AE"}
            cursor={"pointer"}
          />
        </Flex>
        <ModalBody width={"600px"} backgroundColor={"white"} padding={"20px"}>
          <Flex flexDir={"column"} gap={"20px"}>
            <span style={{ fontWeight: "600" }}>
              Rezervišete termin:{" "}
              <span style={{ fontSize: "20px" }}>{data.vrijeme}</span> kod
              frizera : {data.radnik}
            </span>
            <Flex>
              <Text w={"150px"} m={0} fontSize="20px" fontWeight="600">
                Ime i Prezime:
              </Text>
              <Input borderRadius={"10px"} paddingLeft="10px"></Input>
            </Flex>

            <Flex>
              <Text w={"150px"} m={0} fontSize="20px" fontWeight="600">
                Broj Telefona:
              </Text>
              <Input borderRadius={"10px"} paddingLeft="10px"></Input>
            </Flex>
          </Flex>
        </ModalBody>

        <ModalFooter
          padding={"20px"}
          width={"600px"}
          backgroundColor={"white"}
          justifyContent={"center"}
          borderBottomRadius={"30px"}
        >
          <Button
            width={"fit-content"}
            padding={"10px"}
            height={"45px"}
            borderRadius={"30px"}
            backgroundColor={"#E1EEC3"}
            border={"1px solid #E1EEC3"}
            marginRight={"25px"}
            fontSize={"16px"}
            fontWeight={"700"}
            cursor={"pointer"}
            onClick={() => {
              instance
                .post("termini/dodaj-termin.php", {
                  Frizer: data.radnik,
                  Zauzetost: true,
                  Datum: "17/10/2022",
                  Termin: data.vrijeme,
                })
                .then((data) => {
                  console.log("Uspješan post");
                  window.location.reload()

                })
                .catch((e) => {
                  console.log(e);
                });
              onClose();
            }}
          >
            Rezerviši
          </Button>
          <Button
            backgroundColor={"#ECC8AE"}
            border={"1px solid #ECC8AE"}
            width={"fit-content"}
            padding={"10px"}
            height={"45px"}
            borderRadius={"30px"}
            marginRight={"25px"}
            fontSize={"16px"}
            fontWeight={"700"}
            cursor={"pointer"}
            onClick={() => onClose()}
          >
            Zatvori
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
