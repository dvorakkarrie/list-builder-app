import React from 'react'
import {Link} from 'react-router-dom';

const List = props => {
    console.log(props)
    return (
        <div>
            <Link to={`/lists/${props.list._id}`} 
                key={props.list._id && <p>props.list._id</p>}>
                <ul>
                    <li>
                        {props.list.title}
                        <button 
                            className='delete-button'
                            id={props.list._id}
                            onClick={props.handleListDelete}> - </button>
                    </li>
                </ul>
            </Link>
        </div>
    )
}

export default List