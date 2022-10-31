import React, { useState, useEffect, useContext } from "react";
import { InputText } from "./HelperUseContext/InputTextGlobal";

/// style cards style
import "../style/Cards.css";

//// input from components
import Input from "../components/Input";

function Cards() {
  const { inputText } = useContext(InputText);
  const [dataFromApi, setDataFromApi] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/food/search?apiKey=d140d94ec2cb470fb26c373d90ebb78a"
    )
      .then((response) => response.json())
      .then((data) => setDataFromApi(data.searchResults[0]));
  }, []);

  console.log(dataFromApi);
  return (
    <div className="mainContainer">
      <h1 className="mainTitle">{dataFromApi.name}</h1>
      <Input />
      {dataFromApi.length !== 0 ? (
        <div className="container">
          {dataFromApi.results
            .filter((info) => {
              if (inputText === "") {
                return info;
              } else if (
                info.name.toLowerCase().includes(inputText.toLowerCase())
              ) {
                return info;
              }

              return false;
            })
            .map((info) => (
              <div className="MainDiv" key={info.id}>
                <img className="image" src={info.image} alt="img" />
                <div className="divTitleAndButton">
                  <p className="nameOfRecipe">{info.name}</p>
                  <button
                    onClick={() => {
                      window.open(info.link);
                    }}
                    className="buttonLinkWeb"
                  >
                    To The Website
                  </button>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default Cards;
