import React from "react";
import { useAuth0 } from "../react-auth0-spa";

import { Link } from "react-router-dom";
import Profile from "./Profile";

// import Users from "./Users"

// import Login from "./Login";
// import Signup from "./Signup";

<<<<<<< HEAD
const Home = (props) => {
=======
const Home_auth = (props) => {
>>>>>>> 4142561c9a7761c00ad4a2060a0bfa2757fd328d
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && (
        <nav>
          <span>
            {" "}
            <Profile />
            {/* <Link to="/profile">Profile</Link> */}
          </span>
          {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
          <div>
            <Link to='/lists'>Lists</Link>
          </div>
        </nav>
      )}
    </div>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Home_auth;
>>>>>>> 4142561c9a7761c00ad4a2060a0bfa2757fd328d
