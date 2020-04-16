import React from "react";
import { useAuth0 } from "../react-auth0-spa";

import { Link } from "react-router-dom";
// import Profile from "./Profile";

// import Users from "./Users"

// import Login from "./Login";
// import Signup from "./Signup";

const Home = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}
      {isAuthenticated && (
        <nav>
          <span></span>
          {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
        </nav>
      )}
    </div>
  );
};

export default Home;
