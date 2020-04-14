import React from 'react';
import {Link} from 'react-router-dom'

const Users = props => {

    return (
        <div>
            
            <button onClick={props.handleDelete}> <i className="fas fa-trash-alt"></i> </button>
            <Link to={`/`}>
            </Link>
        </div>
    )
}

export default Users;