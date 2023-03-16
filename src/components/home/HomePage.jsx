import React from "react";
import { Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Title from "./Title";
const HomePage = () => {
  return (
    <>
      <Title />
      <AboutMe />
      <Skills />
      <Link to="/cv">show cv</Link>
    </>
  );
};

export default HomePage;
