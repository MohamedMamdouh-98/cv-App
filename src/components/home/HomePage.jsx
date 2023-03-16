import React from "react";
import { Link } from "react-router-dom";
import Application from "../Application";
import '../cv/cv.css'
const HomePage = () => {
  return (
    <>
      <Application />
      <Link to="/cv" className='btn-show-cv'>show cv</Link>
    </>
  );
};

export default HomePage;
