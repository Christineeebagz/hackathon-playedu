import React from "react";
import "./RelatedSearch.css";

export const RelatedSearchCard = ({
  id,
  title,
  description,
  info,
  upvote,
  downvote,
  tags,
}) => {
  return (
    <div id="browse-container">
      {console.log("this is" + id)}
      <div id="b-title">Title: {title}</div>
      <div id="b-description">
        Description: {description}
        {" "}
      </div>
      <div id="b-info">
        This is info: {info}. 
      </div>
      <div id="browse-bottom">
        {/* <div id="b-upvote">{upvote}</div>
        <div id="b-downvote">{downvote}</div> */}
        <button>
          <img
            src="public/upvote-sign.svg"
            alt="Upvote Sign"
            width="25"
            heigth="25"
          />
        </button>
        <div id="b-upvote">{upvote}</div>
        <button>
          <img
            src="public/downvote-sign.svg"
            alt="Upvote Sign"
            width="25"
            heigth="25"
          />
        </button>
        <div id="b-downvote">{downvote}</div>
      </div>
      {/* <h1>
        {id} {description} {info} {upvote} {downvote} {tags}
      </h1> */}
    </div>
  );
};
