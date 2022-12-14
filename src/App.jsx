import "./App.css";
import React, { useState, useEffect } from "react";

import { Flex, Text } from "@chakra-ui/react";
import { Termin } from "./components/termin";
import Header from "./components/header";
import { terminiMK, terminiDP, terminiJK } from "./dummyData/dummyData.js";
import instance from "./api/axios";
import { Tabela } from "./components/tabela";

function App() {
  const [showRadnikMK, setShowRadnikMK] = useState(true);
  const [showRadnikJK, setShowRadnikJK] = useState(false);
  const [showRadnikDP, setShowRadnikDP] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [terminDodan, setTerminDodan] = useState("");

  const functionShowTable = (props) => {
    setShowTable(props);
    instance
      .get("/termini/get-termine-za-frizera.php", {
        params: {
          Frizer: `${
            showRadnikMK
              ? "Milan Krunic"
              : showRadnikJK
              ? "Jovana Kajmakovic"
              : "Darko Petkovic"
          }`,
        },
      })
      .then((data) => {
        console.log("data", data);
        setApiData(data.data);
      });
  };

  useEffect(() => {
    instance.get("/termini/get-sve-termine.php").then((data) => {
      if (showRadnikMK) {
        setApiData(
          data.data.filter((termin) => termin.Frizer === "Milan Krunic")
        );
      } else if (showRadnikJK) {
        setApiData(
          data.data.filter((termin) => termin.Frizer === "Jovana Kajmakovic")
        );
      } else {
        setApiData(
          data.data.filter((termin) => termin.Frizer === "Darko Petkovic")
        );
      }
    });
  }, [showRadnikMK, showRadnikJK, showRadnikDP, terminDodan]);

  return (
    <div className="App">
      <Header
        showRadnikMK={showRadnikMK}
        showRadnikJK={showRadnikJK}
        showRadnikDP={showRadnikDP}
        setShowRadnikMK={setShowRadnikMK}
        setShowRadnikJK={setShowRadnikJK}
        setShowRadnikDP={setShowRadnikDP}
        setShowTable={functionShowTable}
      />
      <Text
        padding={"5px 54px"}
        backgroundColor={"#FFF9EC"}
        fontSize={"22px"}
        fontWeight={"500"}
      >
        Rezervisite termin :
      </Text>
      <Flex
        backgroundColor={"#FFF9EC"}
        height={"100%"}
        flexDir={"column"}
        paddingBottom={"20px"}
        borderBottomRadius={"20px"}
      >
        {showRadnikJK
          ? terminiJK.vremenskiIntervali.map((termin) => {
              return (
                <Termin
                  data={termin}
                  key={termin.id}
                  popunjeniTermini={apiData}
                  setTerminDodan={setTerminDodan}
                />
              );
            })
          : showRadnikMK
          ? terminiMK.vremenskiIntervali.map((termin) => {
              return (
                <Termin
                  data={termin}
                  key={termin.id}
                  popunjeniTermini={apiData}
                  setTerminDodan={setTerminDodan}
                />
              );
            })
          : terminiDP.vremenskiIntervali.map((termin) => {
              return (
                <Termin
                  data={termin}
                  key={termin.id}
                  setTerminDodan={setTerminDodan}
                  popunjeniTermini={apiData}
                />
              );
            })}
      </Flex>
      <Tabela
        data={apiData}
        isOpen={showTable}
        onClose={() => setShowTable(!showTable)}
      ></Tabela>
    </div>
  );
}

export default App;
