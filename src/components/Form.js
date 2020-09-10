import React from "react";

// Styles
import "./Form.css";
// Components
// Icons

const Form = () => {
  return (
    <div className="form--container">
          <h2 className="form--container-headline">Application Process</h2>
      <div className="form--container-inner">
        <div className="form--imagery">
          <img
            src="https://esdialdt.sirv.com/Images/homeSectionForm.svg"
            alt=""
          />
        </div>
        <div className="form--content">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeaYpuj5XRcBI4NnOdMxk85Nemm67dxBj4_eaYqeVacvWsarQ/viewform?embedded=true" width="640" height="1358" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>
    </div>
  );
};

export default Form;
