import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import List from "./List";

export default () => {
    const { userData } = useState([]);

    let allLists = {userData}.map(list => {        
        return (
            <List 
                key={list._id} 
                list={list}
                name="list"
                // handleListDelete={handleListDelete} 
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
