import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cv from "./components/cv/cv";
import HomePage from "./components/home/HomePage";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
