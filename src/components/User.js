import React from 'react'
import {Link} from 'react-router-dom';

const User = props => {
    return (
        <div>
            <button onClick={props.handleDelete}> <i className="fas fa-trash-alt"></i> </button>
            <Link to={`/event/${props.user._id}`}>
                {props.user.first_name}
            </Link>
        </div>
    )
}

export default User
