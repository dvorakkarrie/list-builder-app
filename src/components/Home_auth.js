import React from "react";
import { useAuth0 } from "../react-auth0-spa";

import { Link } from "react-router-dom";

// import Users from "./Users"

// import Login from "./Login";
// import Signup from "./Signup";

const Home-auth = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && (
      <span>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
        <span>Welcome user(props) </span>

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

      </span>
    )}

    </div>
  );
};

export default Home-auth;
