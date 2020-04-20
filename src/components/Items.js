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
        <div className='div-list-main'>
            <Link to='/new-item'><h4>Create New Item (+)</h4></Link>
            <div className='lists-container'>
                {allItems}
            </div>
        </div>
    ) : (
        <div>...loading...</div>
    )
}

