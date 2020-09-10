import React from "react";

// Styles
import "./Home.css";
// Components
import {
  homeSectionOne,
  homeSectionTwo,
  homeSectionThree,
  homeSectionFour,
} from "./data";
import HomeContent from "./HomeContent";
import Form from "../Form";

const Home = () => {
  return (
    <div className="section">
      <HomeContent {...homeSectionOne} />
      <HomeContent {...homeSectionTwo} />
      <HomeContent {...homeSectionThree} />
      <HomeContent {...homeSectionFour} />
      <Form />
    </div>
  );
};

export default Home;
