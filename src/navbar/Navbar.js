import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  let [m, setM] = useState(true);
  let navbarFunc = () => {
    setM(!m);
  };
  return (
    <>
      <div className="navbar">
        <div className="logo_hamburger">
          <h1>logo</h1>
          <div className="hamburger" onClick={navbarFunc}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={m ? "linklar" : "linklar linklarActive"}>
          <li>
            <Link to={"/"} onClick={() => setM(true)}>
              home
            </Link>
          </li>
          <li>
            <Link to={"/about"} onClick={() => setM(true)}>
              about
            </Link>
          </li>
          <li>
            <Link to={"/contact"} onClick={() => setM(true)}>
              contact
            </Link>
          </li>
          <li>
            <Link to={"/setting"} onClick={() => setM(true)}>
              setting
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
