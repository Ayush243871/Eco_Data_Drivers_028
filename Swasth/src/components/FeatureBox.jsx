import React from "react";
import "./FeatureBox.css";

const FeatureBox = ({ image, title, description }) => {
  return (
    <div className="feature-box">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default FeatureBox;
