import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="not_found">
        <h1>not found </h1>
        <h1 style={{ fontSize: "80px" }}>404</h1>
        <button>
          <Link to={"/"}> bosh menu </Link>
        </button>
      </div>
    </>
  );
}

export default NotFound;
