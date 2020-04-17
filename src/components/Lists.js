import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import List from "./List";

export default props => {
    console.log(props.users)

    // const [ users ] = useState([]);

    // let authorsDetail = props.authors.find(
    //     author => author._id === props.match.params.id )
    let allLists = props.users.map(user => {
        user.lists.map(list => {
        return (
            <List 
                key={list._id} 
                list={list}
                name="list"
                handleListDelete={props.handleListDelete} 
                />
       )})})

       console.log(allLists)

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
