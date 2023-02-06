import { Link } from "react-router-dom";
export let Footer = () => {
  return (
    <>
      <h2>footer</h2>

      <ul>
        <li>
          <Link to="/"> home </Link>
          <Link to="blog"> blog </Link>
          <Link to="setting"> setting </Link>
        </li>
      </ul>
    </>
  );
};
