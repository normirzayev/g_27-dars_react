import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <h1>logo</h1>
        </Link>
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>about</NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>blog</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>contact</NavLink>
          </li>
          <li>
            <NavLink to={"/localData"}>localData</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
