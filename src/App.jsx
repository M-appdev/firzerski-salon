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

  // useEffect(() => {
  //   instance.post("/frizer/dodaj-frizera.php", { ime: "RADI" }).then((data) => {
  //     console.log("data", data);
  //   });
  // }, []);

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
              return <Termin data={termin} key={termin.id} />;
            })
          : showRadnikMK
          ? terminiMK.vremenskiIntervali.map((termin) => {
              return <Termin data={termin} key={termin.id} />;
            })
          : terminiDP.vremenskiIntervali.map((termin) => {
              return <Termin data={termin} key={termin.id} />;
            })}
      </Flex>
    </div>
  );
}

export default App;
