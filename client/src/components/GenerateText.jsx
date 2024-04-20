import React, { useState } from "react";
import "./GenerateText.css";

export const GenerateText = ({ input, categories, type }) => {
  const [prompt, setPrompt] = useState({
    title: input,
    description: categories,
    info: type,
  });

  const handleClick = () => {
    const text = document.querySelector("#special-request textarea").value;
    console.log(text);
    setPrompt({
      title: prompt.title + " " + text,
      description: prompt.description,
      info: prompt.info,
    });
  };

  const GeneratePrompt = ({ title, description, info }) => {
    return (
      <div id="generate-prompt">
        <div id="prompt-title">{title}</div>
        <div id="prompt-description">{description}</div>
        <div id="prompt-info">{info}</div>
      </div>
    );
  };

  return (
    <div id="generate-result">
      <div id="generate-section">
        <div id="special-request">
          <textarea placeholder="Write a more detailed prompt here"></textarea>
          <button onClick={handleClick}>Generate</button>
        </div>
        <GeneratePrompt
          title={prompt.title}
          description={prompt.description}
          info={prompt.info}
        />
      </div>
    </div>
  );
};
