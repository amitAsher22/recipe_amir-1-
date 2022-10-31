import React, { useState } from "react";

/// components cards
import Cards from "../components/Cards";

import "../style/App.css";

import { InputText } from "../components/HelperUseContext/InputTextGlobal";

function HomePage() {
  const [inputText, setInputText] = useState("");

  return (
    <InputText.Provider value={{ inputText, setInputText }}>
      <Cards />
    </InputText.Provider>
  );
}

export default HomePage;
