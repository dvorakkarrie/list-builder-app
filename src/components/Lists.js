import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// import List from "./List";

export default props => {
    console.log(props.userId)

    // const [ users ] = useState([]);
    let allLists
    // let allLists = props.users.find(user => user._id === props.match.params.id)
    // let lists = allLists.map(list => {
    //     return (
    //         <List 
    //             key={list._id} 
    //             list={list}
    //             name="list"
    //             handleListDelete={props.handleListDelete} 
    //             />
    //     )}
    //     )

    //    console.log(allLists)

    return allLists ? (
        <>
            <h3>Lists
                <Link to='/new-list'> (+) </Link>
            </h3>
            <div className='lists-container'>
                {/* {allLists} */}
            </div>
        </>
    ) : (
        <div>...loading...</div>
    )
}
