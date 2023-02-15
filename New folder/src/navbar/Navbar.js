import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <NavLink to="/"> home </NavLink>
          </li>
          <li>
            <NavLink to="/about"> about </NavLink>
          </li>
          <li>
            <NavLink to="/contact"> contact </NavLink>
          </li>
          <li>
            <NavLink to="/setting"> setting </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
