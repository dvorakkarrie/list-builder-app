import React from "react";

const Home = (props) => {

  return (
    <div>
      {props.isAuthenticated && (
        <nav>
          <span></span>
          {/* {props.isAuthenticated && <button onClick=''>Log out</button>} */}
        </nav>
      )}
      <p>Login/Signup</p>
    </div>
  );
};

export default Home;
