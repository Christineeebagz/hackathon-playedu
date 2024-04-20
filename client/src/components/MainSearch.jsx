import React, { useState } from "react";
import "./MainSearch.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

export const MainSearch = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const [inputCompleted, setInputCompleted] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectType, setType] = useState("");
  const [hasSubmitted, setHasSubmit] = useState(false);

  //   Sending input to the api
  const fetchData = (value) => {
    axios.get(`http://localhost:3000/api/data?param1=${value}`)
      .then(response => {
        console.log(response.data);
        // Handle the data received from the server
      })
      .catch(error => {
        console.error('There was a problem with the axios request:', error);
    });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setInputCompleted(true);
    }
  };

  const handleClick = () => {
    setInputCompleted(false);
    setHasSubmit(false);
  };

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
    }
  };

  // submit info to backend

  const handleSubmit = async () => {
    if (selectType !== "") onSubmit(input, selectedCategories, selectType);
    setHasSubmit(true);

    try {
      const response = await fetch('http://localhost:3000/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: input,
          categories: selectedCategories
        }),
      });
      const result = await response.json();
      console.log('Response:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  //   const handleGenerate =

  return (
    <>
      {/* ang input sa search [ex: algebra] = value */}
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input
          className="input-main-search"
          placeholder="Search Topic"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          onKeyPress={handleKeyPress}
          onClick={handleClick}
        />
        {inputCompleted && <div className="popup"></div>}
      </div>
      {inputCompleted && (
        <div id="category-section">
          <input
            className="input-category"
            type="checkbox"
            name="category"
            value="visualaid"
            onChange={handleCategoryChange}
          />
          <label htmlFor="visualaid">Visual Aid</label>
          <input
            className="input-category"
            type="checkbox"
            name="category"
            value="auditory"
            onChange={handleCategoryChange}
          />
          <label htmlFor="auditory">Auditory</label>
          <input
            className="input-category"
            type="checkbox"
            name="category"
            value="kinesthetic"
            onChange={handleCategoryChange}
          />
          <label htmlFor="kinesthetic">Kinesthetic</label>

          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      {hasSubmitted && inputCompleted && (
        <div id="type-section">
          <button
            onClick={() => {
              setType("generate");
              onSubmit(input, selectedCategories, "generate");
              //   handleSubmit();
            }}
          >
            Generate
          </button>
          <button
            onClick={() => {
              setType("browse");
              handleSubmit();
              onSubmit(input, selectedCategories, "browse");
            }}
          >
            Browse
          </button>
        </div>
      )}
    </>
  );
};
