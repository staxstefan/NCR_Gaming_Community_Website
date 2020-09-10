import React from "react";

// Styles
import "./HomeContent.css";
// Components
import { Link } from "react-router-dom";
// Icons

const HomeContent = ({
  topline,
  headline,
  description,
  buttonLabel,
  image,
  alt,
}) => {
  return (
    <div className="container">
      <div className="section--page">
        <div className="section--content">
          <p className="section--topline">{topline}</p>
          <h2 className="section--headline">{headline}</h2>
          <p className="section--description">{description}</p>
          <Link className="section--button" to="#recruitment">
            {buttonLabel}
          </Link>
        </div>
        <div className="section--imagery">
          <img src={image} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
