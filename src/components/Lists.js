import React from 'react';
import {Link} from 'react-router-dom';
import List from "./List";

const Lists = props => {
    console.log(props)
    
    let aUser = props.users.find(user => user._id === props.userId)
    
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

    console.log(allLists)
    
    return allLists ? (
        <div className='div-list-main'>
            <Link to='/new-list'><h4>Create New List (+)</h4></Link>
            <div className='lists-container'>
                {allLists}
            </div>
        </div>

    ) : (
        <div>...loading...</div>
    )
}

export default Lists;
