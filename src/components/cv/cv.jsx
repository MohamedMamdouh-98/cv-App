import React from "react";
import "./cv.css";
import ManImg from "./man.webp";
import { BsGithub, BsLinkedin, BsTelephoneFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Cv = () => {
  const getData = JSON.parse(localStorage.getItem("todos"));

  return (
    <div className="container-cv">
      <div className="cv">
        <div className="head">
          <div className="img">
            <img src={ManImg} alt="" />
          </div>
          <div className="title">
            <div className="name">
              <h1>Mohamed Mamdouh</h1>
              <h4>Frontend Develober</h4>
            </div>
            <div className="about-me">
              <h5>About me</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
                odio Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, fugiat qui autem quia sunt laborum numquam, beatae
                dicta architecto corporis consequuntur doloribus? Magnam non
                eius rerum facere reiciendis minus dolore exercitationem. Ipsum
                maxime, amet, expedita aliquid saepe, id quibusdam repudiandae
                quam temporibus consequuntur perspiciatis culpa vero soluta
                aspernatur iure perferendis.
              </p>
            </div>
          </div>
        </div>
        <div className="intro">
          <div className="contact">
            <p>
              <span>
                <SiGmail />
              </span>
              mohamed.work45@gmail.com
            </p>
            <p>
              <span>
              <BsTelephoneFill/>
              </span>
              +20 10 64 31 65 45
            </p>
            <p>
              <span>
              <BsLinkedin/>
              </span>
              https://www.linkedin.com/feed/
            </p>
            <p>
              <span>
                <BsGithub />
              </span>
              https://github.com/MohamedMamdouh-98
            </p>
          </div>
          <div className="skills">
            <div className="col-style">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h5>skills</h5>
            <ul>
              {getData.map((el) => (
                <li key={el.id}>{el.todo}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
