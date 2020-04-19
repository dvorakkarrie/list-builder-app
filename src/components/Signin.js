import React from "react";

const Signin = (props) => {
  console.log(props)

  return !props.isAuthenticated ? (
    <div>
      <form onChange={props.handleChange} onSubmit={props.handleSignin}>
        <h2>SignIn</h2>
        <div className="div-signin">
          <label>User Name:</label>
          <input
            className="input-box"
            type="text"
            name="userEmailAddress"
            placeholder="Enter your email address"
          />
        </div>
        <input 
          className="button" type="submit" value="SignIn" />
      </form>
    </div>
  ) : (
    <div></div>
  )
};

export default Signin;
