import React from "react";
import { useRef } from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

import { useInView } from "framer-motion";

import "./brand.css";

const Brand = () => {
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
      className="gpt3__brand section__padding"
    >
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="google" />
      </div>
      <div>
        <img src={shopify} alt="google" />
      </div>
      <div>
        <img src={dropbox} alt="google" />
      </div>
      <div>
        <img src={atlassian} alt="google" />
      </div>
    </div>
  );
};

export default Brand;
