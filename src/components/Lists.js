import React from 'react';
import {Link} from 'react-router-dom';
import List from "./List";

export default props => {
    console.log(props)

    let aUser = props.users.find(user => 
        user._id === props.userId)
    
        console.log(aUser)

    let allLists = aUser.lists.map(list => {
        return (
            <List 
                key={list._id}
                list={list}
                name="list"
                userId={props.userId}
                handleListDelete={props.handleListDelete} 
                />
        )}
    )
        
    return allLists ? (
        <>
            <h3>Lists
                <Link to='/new-list'> (+) </Link>
            </h3>
            <div className='lists-container'>
                {allLists}
            </div>
        </>

    ) : (
        <div>...loading...</div>
    )
}
