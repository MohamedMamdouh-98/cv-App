import React from "react";
import { Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Skills from "./Skills";
import Title from "./Title";
import UploadImg from "./UploadImg";
const HomePage = () => {
  return (
    <>
    <UploadImg />
      <Title />
      <AboutMe />
      <Skills />
      <Contact />
      <Link to="/cv">show cv</Link>
    </>
  );
};

export default HomePage;
