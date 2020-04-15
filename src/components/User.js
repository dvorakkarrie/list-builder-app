import React from 'react'
import {Link} from 'react-router-dom';

const User = props => {
    return (
        <div>
            <Link to={`/users/${props.user._id}`} key={props.user._id}>
                <ul>
                    <li className='search-results'>
                        {props.user.first_name} {props.user.last_name}
                    <span className='delete-link' id={props.user._id} 
                        onClick={props.handleAuthorDelete}>
                            <i className="fas fa-trash-alt"> </i>
                    </span>
                    </li>
                </ul>                
            </Link>
        </div>
    )
}

export default User;
