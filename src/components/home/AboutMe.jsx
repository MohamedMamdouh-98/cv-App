import React from "react";
import { useState } from "react";

const AboutMe = () => {
  //Add AboutMe
  const [aboutVal, setAboutVal] = useState("");
  const [text, setText] = useState("");
  const addText = () => {
    setText(aboutVal);
    setAboutVal("");
  };
  //Edit AboutMe
  const EditAboutMe = () => {
    setAboutVal(text);
    setText("");
  };

  localStorage.setItem("about", JSON.stringify(text));


  const handleOnSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center my-5">
      <h2>About Me</h2>
      <form onSubmit={handleOnSubmit}>
        <textarea
          cols="100"
          rows="5"
          onChange={(e) => setAboutVal(e.target.value)}
          value={aboutVal}
          placeholder="enter write an introduction about"
        ></textarea>
        <button type="submit" onClick={() => addText()}>
          add
        </button>
      </form>
      <div className="mb-5">
        <p>{text}</p>
        {text ? (
          <button onClick={() => EditAboutMe()}>edit</button>
        ) : (
          <p>Please write an introduction about yourself</p>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
