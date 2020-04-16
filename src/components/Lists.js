import React from 'react';
import {Link} from 'react-router-dom';
import List from "./List";

const Lists = props => {
    console.log(props)

    let allLists = props.lists.map(list => {
        return (
            <List 
                key={list._id} 
                list={list}
                name="list"
                hhandleListDelete={props.handleListDelete} />
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

export default Lists;