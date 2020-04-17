import React, { Fragment, useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import axios from "axios";

// let backendUrl = "http://127.0.0.1:8080/";
let backendUrl = "https://listbuilder-backend.herokuapp.com";

export default () => {
  const { loading, user } = useAuth0();
  const [ users, setUsers ] = useState([{}]);


  // console.log(user.email);


  useEffect(() => {
    if (loading) {
      return;
    }
    const fn = async () => {
      const returnUsers = await 
      axios({
        method: "POST",
        url: `${backendUrl}users/`,
        data: {
          email: user.email,
        },
      })
      // .then((userData) => {
        console.log(returnUsers)
        setUsers(returnUsers)
      // .catch(err => console.log(err))
    };
    fn() 
    }, [loading]);


  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return user ? (
    <Fragment>
      <span>Welcome {user.name}</span>
      {/* <code>{JSON.stringify(user, null, 2)}</code> */}
    </Fragment>
  ) : (
    <span>(user)</span>
  );
};