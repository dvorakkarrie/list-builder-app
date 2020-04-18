import React from 'react'
import {Link} from 'react-router-dom';

const User = props => {
    console.log(props.userId)
    return (
        <div>
            <Link to={`/users/${props.userId}`} 
                key={props.userId}
                >
                <ul>
                    <li>
                        {props.user.email_address}
                        <button id={props.userId} 
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
