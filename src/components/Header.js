import React from "react";
import {Link} from 'react-router-dom';

const Header = (props) => {
  return props.isAuthenticated ? (
    <div>
      <Link to="/"><h1>List Builder</h1></Link>
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
