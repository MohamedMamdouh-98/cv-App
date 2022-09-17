import React, { useState } from "react";

const Title = () => {
  //Name
  const [addName, setAddAddName] = useState("");
  const [name, setName] = useState("");
  //the work
  const [addWork, setAddWork] = useState("");
  const [work, setWork] = useState("");
  //add Name
  const AddNameTitle = () => {
    //add name
    setName(addName);
    setAddAddName("");
    //add Work
    setWork(addWork);
    setAddWork("");
  };
  //edit Name
  const EditTitle = () => {
    //edit name
    setAddAddName(name);
    setName("");
    //edit the work
    setAddWork(work);
    setWork("");
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="my-5">
      <h2>Title Name And Work</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          onChange={(e) => setAddAddName(e.target.value)}
          value={addName}
          placeholder="enter your name"
        />

        <input
          type="text"
          onChange={(e) => setAddWork(e.target.value)}
          value={addWork}
          placeholder="enter your work"
        />
        <button type="submit" onClick={() => AddNameTitle()}>
          Add
        </button>
      </form>
      <div>
        <h2>name :: {name}</h2>
        <h4>work :: {work}</h4>
      </div>
      {name && work ? (
        <button onClick={() => EditTitle()}>Edit</button>
      ) : (
        <p>please enter your name and work</p>
      )}
    </div>
  );
};

export default Title;
