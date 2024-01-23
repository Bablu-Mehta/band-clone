import React from "react";
import "./singleBlog.css";

const SingleBlog = ({
  blogImage,
  blogHeading,
  blogSubHeading,
  blogDEscription,
}) => {
  return (
    <div className="blog-card">
      <img src={blogImage} alt={blogHeading} />
      <div className="blog-card__content">
        <h2>{blogHeading}</h2>
        <p className="blog-card__sub-heading">{blogSubHeading}</p>
        <p className="blog-card__description">{blogDEscription}</p>
        <div className="blog-card__buttons">
          <p className="blog-card__btn">READ MORE</p>
          <p className="blog-card__textOnly">
            Comments <span>0</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
