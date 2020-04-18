import React from 'react'
import {Link} from 'react-router-dom';

const ListItems = (props) => {
    console.log(props)

    return (
        <div>
            <Link to={`/items/${props.item._id}`} 
                key={props.item_id}>
                <ul>
                    <li>
                        {props.item.item_desc}
                        <button 
                            className='delete-button'
                            id={props.item._id}
                            onClick={props.handleItemDelete}> - </button>
                    </li>
                </ul>
            </Link>
        </div>
    )
}

export default ListItems
