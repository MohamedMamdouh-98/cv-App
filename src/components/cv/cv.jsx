import React from 'react'
import { Link } from 'react-router-dom'
import './cv.css'
// import "./cv.css";
// import { BsGithub, BsLinkedin, BsTelephoneFill } from "react-icons/bs";
// import { SiGmail } from "react-icons/si";

const Cv = () => {
//   //get skills
//   const getData = JSON.parse(localStorage.getItem("todos"));
//   //get about me
//   const getAbout = JSON.parse(localStorage.getItem("about"));
// //get contact me
// //get name && work
const getName = JSON.parse(localStorage.getItem("name"));
// const getWork = JSON.parse(localStorage.getItem("work"));
// //get contact me
// const getGmail = JSON.parse(localStorage.getItem("gmail"));
// const getPhone = JSON.parse(localStorage.getItem("phone"));
// const getLinkedin = JSON.parse(localStorage.getItem("linkedin"));
// const getGithub = JSON.parse(localStorage.getItem("github"));

  return (
<div className='cv'>
<h1>{getName}</h1>

<Link to="/">home</Link>
</div>
  );
};

export default Cv;
