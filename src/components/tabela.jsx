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
  TableCaption,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  TableContainer,
  Tfoot,
} from "@chakra-ui/react";
import instance from "../api/axios";
import { createColumnHelper } from "@tanstack/react-table";

export const Tabela = ({ isOpen, onClose, data }) => {
  const columnHelper = createColumnHelper();

  console.log("data", data);
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
          width={"900px"}
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
              Rezervisani Termini:
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
        <ModalBody width={"900px"} backgroundColor={"white"} padding={"20px"}>
          <table>
            {data.map((termin) => {
              return (
                <>
                  <tr>
                    <th>Frizer</th>
                    <th>Datum</th>
                    <th>Termin</th>
                    <th>Musterija</th>
                    <th>Broj Telefona</th>
                  </tr>
                  <tr>{Object.entries(termin).map(([key, value]) => {
                    return(
                      <td>{value}</td>
                    )
                  })}</tr>
                </>
              );
            })}

            {/* <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Maria Anders</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr> */}
          </table>
        </ModalBody>

        <ModalFooter
          padding={"20px"}
          width={"900px"}
          backgroundColor={"white"}
          justifyContent={"center"}
          borderBottomRadius={"30px"}
        >
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
