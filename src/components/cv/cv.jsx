import React from 'react'
import { Link } from 'react-router-dom'

const cv = () => {
  return (
    <div>
    <Link to="/">home</Link>
    </div>
  )
}

export default cv

// import React from "react";
// import "./cv.css";
// import ManImg from "./man.webp";
// import { BsGithub, BsLinkedin, BsTelephoneFill } from "react-icons/bs";
// import { SiGmail } from "react-icons/si";

// const Cv = () => {
//   //get skills
//   const getData = JSON.parse(localStorage.getItem("todos"));
//   //get about me
//   const getAbout = JSON.parse(localStorage.getItem("about"));
// //get contact me
// //get name && work
// const getName = JSON.parse(localStorage.getItem("name"));
// const getWork = JSON.parse(localStorage.getItem("work"));
// //get contact me
// const getGmail = JSON.parse(localStorage.getItem("gmail"));
// const getPhone = JSON.parse(localStorage.getItem("phone"));
// const getLinkedin = JSON.parse(localStorage.getItem("linkedin"));
// const getGithub = JSON.parse(localStorage.getItem("github"));

//   return (
//     <div className="container-cv">
//       <div className="cv">
//         <div className="head">
//           <div className="img">
//             <img src={ManImg} alt="" />
//           </div>
//           <div className="title">
//             <div className="name">
//               <h1>{getName}</h1>
//               <h4>{getWork}</h4>
//             </div>
//             <div className="about-me">
//               <h5>About me</h5>
//               <p>
//                 {getAbout}
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="intro">
//           <div className="contact">
//             <p>
//               <span>
//                 <SiGmail />
//               </span>
//               {getGmail}
//             </p>
//             <p>
//               <span>
//               <BsTelephoneFill/>
//               </span>
//               + 2{getPhone}
//             </p>
//             <p>
//               <span>
//               <BsLinkedin/>
//               </span>
//               {getLinkedin}
//             </p>
//             <p>
//               <span>
//                 <BsGithub />
//               </span>
//               {getGithub}
//             </p>
//           </div>
//           <div className="skills">
//             <div className="col-style">
//               <span></span>
//               <span></span>
//               <span></span>
//             </div>
//             <h5>skills</h5>
//             <ul>
//               {getData.map((el) => (
//                 <li key={el.id}>{el.todo}</li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cv;
