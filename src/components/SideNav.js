import React from 'react'

const SideNav = props => {
    return (
        <div>
            <h4>Lists:</h4>
            <input type='text' name="lists">View Lists</input>
            <input type='text' name='new-list'>Create List</input>
            <h4>Users:</h4>
            <input type='text' name="users">View Users</input>
            <input type='text' name="new-user">Create User</input>
        </div>
    )
}

export default SideNav
