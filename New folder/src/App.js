import React from "react";
import "./style.css";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import { Page } from "./Page";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
