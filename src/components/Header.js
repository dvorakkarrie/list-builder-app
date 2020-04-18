import React from "react";

const Header = (props) => {
  return props.isAuthenticated ? (
    <div>
      <h1>List Builder</h1>
      <p>Welcome {props.userEmailAddress}</p>
      <button onClick={props.handleLogout}>Log out</button>
    </div>
  ) : (
    <div>
      <h1>List Builder</h1>
    </div>
  );
};

export default Header;
