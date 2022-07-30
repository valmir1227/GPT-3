import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";

import "./cta.css";

const Cta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s",
      }}
      className="gpt3__cta"
    >
      <div className="gpt3__cta-content">
        <p>Request Early Access to Ge Started</p>
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>
      <div className="gpt3__cta-btn">
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};
export default Cta;
