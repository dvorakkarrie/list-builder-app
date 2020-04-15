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
                handleDelete={props.handleDelete} />
        )
    })

    console.log(allUsers)
    return (
        <div className='sub-titles'>User List
            <Link to='/new-user' className='create-new'>
                Add User
            </Link>
            <div className='events-container'>{allUsers}</div>
        </div>
    )
}

export default Users;