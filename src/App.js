import React from "react";
import "./style.css";
import Navbar from "./navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Setting from "./page/Setting";
function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
