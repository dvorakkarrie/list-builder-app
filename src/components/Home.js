import React from "react";

import SignIn from "./Signin";

const Home = (props) => {
  console.log(props.isAuthenticated);

  

  return props.isAuthenticated ? (
    <div>
      <button
        style={{ visibility: props.isAuthenticated ? "visible" : "hidden" }}
        onClick=""
      >Log out
      </button>
      <SignIn />
      {/* <button style={{ visibility: props.isAuthenticated ? 'hidden' : 'visible' }} 
      onClick=''>
        SignIn
      </button> */}

      {/* <p>Login/Signup</p> */}
    </div>
  ) : (
    <div>...loading</div>
    )
};

export default Home;
