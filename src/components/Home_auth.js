import React from "react";
import { useAuth0 } from "../react-auth0-spa";

// import { Link } from "react-router-dom";
// import Profile from "./Profile";

// import Users from "./Users"

// import Login from "./Login";
// import Signup from "./Signup";

const Home = () => {
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
            {/* <Link to='/profile'>Profile</Link> */}
            {/* <Profile /> */}
            {/* <Link to="/profile">Profile</Link> */}
          </span>
          {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
          {/* <div>
            <Link to='/lists'>Lists</Link>
          </div> */}
        </nav>
      )}
    </div>
  );
};

export default Home;
