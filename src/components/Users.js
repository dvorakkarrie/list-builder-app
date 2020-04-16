import React from 'react';
import {Link} from 'react-router-dom';
import User from "./User";

const Users = props => {
    console.log(props)

    let allUsers = props.users.map(user => {
        return (
            <User 
                key={user._id} 
                user={user}
                name="user"
                handleUserDelete={props.handleUserDelete} />
        )
    })

    return allUsers ? (
        <>
            <h3>User List
                <Link to='/new-user'> (+) </Link>
            </h3>
            <div className='users-container'>
                {allUsers}
            </div>
        </>
    ) : (
        <div>...loading...</div>
    )
}

export default Users;