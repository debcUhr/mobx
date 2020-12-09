import React from "react";
import ReactDOM from "react-dom";
import MainContainer from "./components/MainContainer";

const rootElement = document.getElementById("root");
ReactDOM.render(
   <React.StrictMode>
      <MainContainer />
   </React.StrictMode>,
   rootElement
);
