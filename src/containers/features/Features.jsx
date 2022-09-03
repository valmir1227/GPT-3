import React from "react";
import { useRef } from "react";
import Feature from "../../components/feature/Feature";
import { useInView } from "framer-motion";
import "./features.css";

const featuresData = [
  {
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipisc, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
  {
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet, consectetur adipis et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci commodo consequat",
  },
  {
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet, consectetur adipis Ut enim ad minim veniam, quis nostrud exercitati.",
  },
  {
    title: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc.",
  },
];

const Features = () => {
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
      className="gpt3__features section__padding"
      id="features"
    >
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need to Realize It. Step into Future
          Today. & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
