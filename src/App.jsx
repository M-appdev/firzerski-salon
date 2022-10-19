import "./App.css";
import React, { useState, useEffect } from "react";

import { Flex } from "@chakra-ui/react";
import { Termin } from "./components/termin";
import Header from "./components/header";
import { terminiMK, terminiDP, terminiJK } from "./dummyData/dummyData.js";
import instance from "./api/axios";

function App() {
  const [showRadnikMK, setShowRadnikMK] = useState(true);
  const [showRadnikJK, setShowRadnikJK] = useState(false);
  const [showRadnikDP, setShowRadnikDP] = useState(false);

  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    instance.post("/termini/get-sve-termine.php").then((data) => {
      console.log("opalio", data.data);
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
  }, [showRadnikMK, showRadnikJK, showRadnikDP]);

  return (
    <div className="App">
      <Header
        showRadnikMK={showRadnikMK}
        showRadnikJK={showRadnikJK}
        showRadnikDP={showRadnikDP}
        setShowRadnikMK={setShowRadnikMK}
        setShowRadnikJK={setShowRadnikJK}
        setShowRadnikDP={setShowRadnikDP}
      />
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
                />
              );
            })
          : terminiDP.vremenskiIntervali.map((termin) => {
              return (
                <Termin
                  data={termin}
                  key={termin.id}
                  popunjeniTermini={apiData}
                />
              );
            })}
      </Flex>
    </div>
  );
}

export default App;
