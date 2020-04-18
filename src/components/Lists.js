import React from 'react';
import {Link} from 'react-router-dom';
import List from "./List";

export default props => {
    console.log(props)
    
    let allLists = props.users.map(user => 
        user.lists.map(list => {
        return (
            <List 
                key={list._id}
                list={list}
                name="list"
                userId={props.userId}
                handleListDelete={props.handleListDelete} 
                />
        )}
    ))
        
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
