import React from "react";
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
    </>
  );
};

export default HomePage;
