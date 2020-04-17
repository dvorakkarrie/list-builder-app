import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import List from "./List";

export default props => {
    const [ users ] = useState([]);

    let allLists = users.map(list => {   
        console.log(list)     
        return (
            <List 
                key={list._id} 
                list={list}
                name="list"
                handleListDelete={props.handleListDelete} 
                />
        )
    })

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
