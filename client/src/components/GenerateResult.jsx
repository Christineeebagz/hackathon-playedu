import React from "react";
import { GenerateText } from "./GenerateText";
// import RelatedSearch from "./RelatedSearch";
import "./GenerateText.css";

export const GenerateResult = ({ input, categories, type }) => {
  return (
    <div>
      {/* <h1>
        YOU CHOSE GENERATE {input}, {categories}, {type}
      </h1> */}
      {type === "generate" && (
        <GenerateText input={input} categories={categories} type={type} />
      )}
      {/* <RelatedSearch /> */}
    </div>
  );
};
