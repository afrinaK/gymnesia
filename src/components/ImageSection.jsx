import React from "react";
import "../styles/ImageSection.css";
import backgroundImage from "../assets/Add.png"; // Update path as needed

const ImageSection = () => {
  return (
    <div
      className="full-width-image"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    ></div>
  );
};

export default ImageSection;
