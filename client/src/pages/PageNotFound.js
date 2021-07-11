import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="Home" style={{ marginTop: 20, textAlign: "center" }}>
      <h1>Page not found</h1>
      <Link to="/">Return to home page</Link>
    </div>
  );
};

export default PageNotFound;
