import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s",
      }}
      className="gpt3__possibility section__padding"
      id="possibility"
    >
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are <br />
          beyond your imagination
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          assumenda, quia repellendus harum qui nihil saepe.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};
export default Possibility;
