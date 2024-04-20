import React, { useState, useEffect } from "react";
import { RelatedSearchCard } from "./RelatedSearchCard";
import "./RelatedSearch.css";
import axios from "axios";

export const RelatedSearch = ({ input }) => {
  const [data, setData] = useState([]);

  // const fetchData = (value) => {
  //   fetch(`http://localhost:3000/api/data?param1=${value}`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //       setData(json);
  //     });
  // };


  useEffect(() => {
    handleChange(input);
  });

  async function handleChange(value) {
    const response = await fetch(
      `http://localhost:3000/api/data?param1=${value}`
    );
  
    const json = await response.json();
    setData(json);
  };

  return (
    <div id="browse-gallery">

      {data.map((item) => (
        <RelatedSearchCard
          key={item._id}
          id={item._id}
          title={item.title}
          description={item.description}
          info={item.info}
          upvote={item.upvotes}
          downvote={item.downvotes}
          tags={item.topics}
        />
      ))}
    </div>
  );
};

// export default RelatedSearch;
