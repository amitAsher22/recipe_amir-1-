import React, { useContext } from "react";
import { InputText } from "./HelperUseContext/InputTextGlobal";

///style css
import "../style/Input.css";

function Input() {
  const { inputText, setInputText } = useContext(InputText);

  const searchInput = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="DivInput">
      <input
        onChange={(e) => {
          searchInput(e);
        }}
        className="SearchInput"
        placeholder="Search..."
      />
      {/[\u0590-\u05FF]/.test(inputText) ? (
        <p className="errorMassage">Error, written in English only</p>
      ) : null}
    </div>
  );
}

export default Input;
