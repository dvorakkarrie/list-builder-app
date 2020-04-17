import React from 'react'
import {Link} from 'react-router-dom';

const List = props => {
    console.log(props.list)
    return (
        <div>
            <Link to={`/lists/${props.list._id}`} 
                key={props.list_id}>
                <ul>
                    <li>
                        {props.list.title}
                        <button id={props.list._id} 
                            onClick={props.handleListDelete}>
                            <i className="fas fa-trash-alt"></i>  
                        </button>
                    </li>
                </ul>
            </Link>
        </div>
    )
}

export default List