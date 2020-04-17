import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-spa";
import axios from "axios";

// let backendUrl = "http://127.0.0.1:8080/";
let backendUrl = "https://listbuilder-backend.herokuapp.com";

export default (props) => {
  const { loading, user } = useAuth0();
  const [users, setUsers] = useState(null);

  useEffect(() => {
    if (loading) {
      return;
    }
    const fn = async () => {
      const returnUsers = await axios({
        method: "POST",
        url: `${backendUrl}users/`,
        data: {
          email: user.email,
        },
      });
      // .then((userData) => {
      console.log(returnUsers);
      await setUsers(returnUsers);
      console.log(users);
      // .catch(err => console.log(err))
    };
    fn();
  }, [loading]);

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return user ? (
    <>
      <span>Welcome {user.name}</span>
      {users && <p>{users.email}</p>}
      {/* <code>{JSON.stringify(user, null, 2)}</code> */}
    </>
  ) : (
    <span>(user)</span>
  );
};
