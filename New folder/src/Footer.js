import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <ul>
        <li>
          <Link to="/"> home </Link>
          <Link to="/blog"> blog </Link>
          <Link to="/shop"> shop </Link>
          <Link to="/about"> about </Link>
        </li>
      </ul>
    </>
  );
}

export default Footer;
