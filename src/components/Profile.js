import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

console.log(user)

  return user ? (
    <Fragment>
      <span>Welcome {user.name}</span>
      {/* <code>{JSON.stringify(user, null, 2)}</code> */}

    </Fragment>
  ) :
 <span>(user)</span> 
  
}

export default Profile;