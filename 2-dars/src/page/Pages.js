import Home from "./Home";
import NotFound from "./NotFound";
import Setting from "./Setting";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import { Route, Routes } from "react-router-dom";
function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </>
  );
}

export default Pages;
