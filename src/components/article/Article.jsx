import React from "react";
import "./article.css";
import { useRef } from "react";

import { useInView } from "framer-motion";

const Article = ({ imgUrl, date, text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s",
      }}
      className="gpt3__blog-container_article"
    >
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
