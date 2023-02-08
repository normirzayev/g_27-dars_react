import React from "react";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import { Footer } from "./component/Footer";
import Pages from "./page/Pages";
import "./style.css";
function App() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <Pages />
      {/* <Footer /> */}
    </>
  );
}

export default App;
