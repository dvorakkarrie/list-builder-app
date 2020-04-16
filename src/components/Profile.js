import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import axios from "axios";

let backendUrl = "http://localhost:8080/";

export default (props) => {
  const { loading, user } = useAuth0();
  const [ users, setUsers ] = useState(null);


  // console.log(user.email);

  useEffect(() => {
    if (loading) {
      return;
    }
    const fn = async () => {
      const returnUsers = await 
      axios({
        method: "GET",
        url: `${backendUrl}users/`
        // data: {
        //   email: user.email,
        // },
      })
      // .then((userData) => {
        console.log(returnUsers)
        await setUsers(returnUsers)
        console.log(users)
      // .catch(err => console.log(err))
    };
    fn() 
    }, [loading]);


  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return user ? (
    <>
      <span>Welcome {user.name}</span>
    {users && <p>{users.email}</p>}
    </>
  ) : (
    <span>(user)</span>
  );
};
