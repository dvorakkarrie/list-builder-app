import React from 'react'
import {Link} from 'react-router-dom';

const User = props => {
    console.log(props)
    return (
        <div>
            <Link to={`/users/${props.user._id}`} 
                key={props.user._id}>
                <ul>
                    <li>
                        {props.user.email_address}
                        <button id={props.user._id} 
                            onClick={props.handleUserDelete}>
                            Delete 
                        </button>
                    </li>
                </ul>
            </Link>
        </div>
    )
}

export default User
