import React from 'react';
import User from "./User";

const Users = props => {
    console.log(props)

    let allUsers = props.users.map(user => {
        return (
            <User 
                key={user._id} 
                user={user}
                name="user"
                userId={props.userId}
                handleUserDelete={props.handleUserDelete} />
        )
    })

    return allUsers ? (
        <>
            <h3>User List</h3>
            <div className='users-container'>
                {allUsers}
            </div>
        </>
    ) : (
        <div>...loading...</div>
    )
}

export default Users;