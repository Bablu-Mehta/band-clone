import React from "react";
import "./popularPost.css";

const PopularPost = ({ postImage, postHeading, postSubHeading }) => {
  return (
    <div className="post-card">
      <img src={postImage} alt={postHeading} />
      <div className="post-content">
        <h3>{postHeading}</h3>
        <p>{postSubHeading}</p>
      </div>
    </div>
  );
};

export default PopularPost;
