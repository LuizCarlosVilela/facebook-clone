import React from "react";

import { Link } from "react-router-dom";

import "./styles.css";

function page404() {
  return (
    <div className="container">
      <Link to="/" className="linkForHome">
        <h1>Home Page</h1>
      </Link>
      <h2>
        Error: 404 <strong>Page not function</strong>
      </h2>
    </div>
  );
}

export default page404;
