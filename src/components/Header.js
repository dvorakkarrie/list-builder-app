import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return props.isAuthenticated ? (
    <div className="header">
      <h1>
        <Link to="/">List Builder</Link>
      </h1>
      <p className="welcome">Welcome {props.userEmailAddress}</p>
      <button className="btn-logout" onClick={props.handleLogout}>
        Log out
      </button>
    </div>
  ) : (
    <div>
      <h1>
        <Link to="/">List Builder</Link>
      </h1>
    </div>
  );
};

export default Header;
