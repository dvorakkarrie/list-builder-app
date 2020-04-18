import React from 'react';
import {Link} from 'react-router-dom';
import Item from "./Item";

export default props => {
    console.log(props.users)

    
    let allItems = props.users.map(user => 
        user.items.map(item => {
        return (
            <Item
                key={item._id}
                item={item}
                name="item"
                handleItemDelete={props.handleItemDelete} 
                />
        )}
    ))
        
    return allItems ? (
        <>
            <h3>Items
                <Link to='/new-item'> (+) </Link>
            </h3>
            <div className='items-container'>
                {allItems}
            </div>
        </>
    ) : (
        <div>...loading...</div>
    )
}
