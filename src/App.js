import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Cv from "./components/cv/cv";
import HomePage from "./components/home/HomePage";

const App = () => {
const[showCv, setShowCv] = useState(false)

const showReturn = ()=>{
  setShowCv(!showCv)
}
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>
        <button  onClick={showReturn} to="/cv">
        {
          showCv? <Link to="/cv">show cv</Link> : <Link to="/">home</Link>
        }
        </button>
      </BrowserRouter>
    </div>
  );
};

export default App;
