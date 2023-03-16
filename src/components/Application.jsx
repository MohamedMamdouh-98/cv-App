import React from "react";

const Application = () => {
  return (
    <div className="container-app">
      <div className="content">xxxxxxxxxxx</div>
      <form className="form">
        <input type="text" placeholder="enter uor name" />
        <input type="text" placeholder="enter uor work" />
        <input type="text" placeholder="enter uor contact" />
        <textarea
          className="input"
          rows="5"
          placeholder="enter write an introduction about"
        ></textarea>
        <input type="text" placeholder="enter uor skills" />
        <input type="submit" value='submit'/>
      </form>
    </div>
  );
};

export default Application;
