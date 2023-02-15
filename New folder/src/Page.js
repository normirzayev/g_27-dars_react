import About from "./page/About";
import Blog from "./page/Blog";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Setting from "./page/Setting";
import Shop from "./page/Shop";
import { Route, Routes } from "react-router-dom";

export function Page() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}