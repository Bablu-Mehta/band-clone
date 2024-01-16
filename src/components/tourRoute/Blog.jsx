import React from "react";
import SingleBlog from "./SingleBlog";
import "./blog.css";
import woodsImage from "../../assets/tourRoute/woods.jpg";
import bioImage from "../../assets/tourRoute/avatar.jpg";
import PopularPost from "./PopularPost";
import postImage from "../../assets/tourRoute/workshop.jpg";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-heading">
        <h1>MY BLOG</h1>
        <p>
          Welcome to the blog of <span>unknown</span>
        </p>
      </div>

      <div className="blog-section">
        <div className="left">
          <SingleBlog
            blogImage={woodsImage}
            blogHeading="TITLE HEADING"
            blogSubHeading="Title description, April 7, 2014"
            blogDEscription="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
          />

          <SingleBlog
            blogImage={woodsImage}
            blogHeading="TITLE HEADING"
            blogSubHeading="Title description, April 7, 2014"
            blogDEscription="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
          />
        </div>
        <div className="right">
          <div className="blog-bio">
            <img src={bioImage} alt="picture of women" />
            <div className="blog-bio__content">
              <h3>My Name</h3>
              <p>
                Just me, myself and I, exploring the universe of uknownment. I
                have a heart of love and a interest of lorem ipsum and mauris
                neque quam blog. I want to share my world with you.
              </p>
            </div>
          </div>

          {/* =========PopularPost Section=========== */}

          <div className="blog-popular-posts">
            <div className="blog__popular-posts">Popular Posts</div>
            <ul>
              <li>
                <PopularPost
                className="blog__single-post"
                  postImage={postImage}
                  postHeading="Lorem"
                  postSubHeading="Sed mattis nunc"
                />
              </li>

              <li>
                <PopularPost
                  postImage={postImage}
                  postHeading="Lorem"
                  postSubHeading="Sed mattis nunc"
                />
              </li>

              <li>
                <PopularPost
                  postImage={postImage}
                  postHeading="Lorem"
                  postSubHeading="Sed mattis nunc"
                />
              </li>

              <li>
                <PopularPost
                  postImage={postImage}
                  postHeading="Lorem"
                  postSubHeading="Sed mattis nunc"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
