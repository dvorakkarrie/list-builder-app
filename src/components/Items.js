import React from 'react';
import {Link} from 'react-router-dom';
import Item from "./Item";

export default props => {
    console.log(props.users)
   
    let aUser = props.users.find(user => user._id === props.userId)
    
        console.log(aUser)

    let allItems = aUser.items.map(item => {
        return (
            <Item 
                key={item._id}
                item={item}
                name="item"
                userId={props.userId}
                handleItemDelete={props.handleItemDelete} 
                />
        )}
    )
        
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

