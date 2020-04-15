import React from 'react'
import {Link} from 'react-router-dom';

const User = props => {
    return (
        <div>
            <Link to={`/users/${props.user._id}`}>
                {props.user.first_name}
        
            <button onClick={props.handleDelete}>
                <i className="fas fa-trash-alt"></i>  
            </button>
            </Link>
        </div>
    )
}

export default User
