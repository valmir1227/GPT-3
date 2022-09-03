import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <motion.div
        initial={{ translateX: -1000 }}
        animate={{ translateX: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="gpt3__header-content"
      >
        <h1 className="gradient__text">
          Let's Build Somenthing amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam hic ab
          eum debitis libero fugiat assumenda? Aliquid, obcaecati laboriosam
          repellat consequatur sed ex perspiciatis nihil neque.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ translateX: 1000 }}
        animate={{ translateX: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="gpt3__header-image"
      >
        <img src={ai} />
      </motion.div>
    </div>
  );
};

export default Header;
