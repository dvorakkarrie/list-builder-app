import React from 'react'
import {Link} from 'react-router-dom';

const SideNav = (props) => {
    return props.isAuthenticated ? (
        <div>
            <div><Link to='/lists'>My Lists</Link>
                <Link to='/new-list'> (+)</Link></div>
            <div><Link to='/items'>My Items</Link>
                <Link to='/new-item'> (+)</Link></div>
            <div><Link to='/tasks'>My Tasks</Link></div>
        </div>
    ) : (
        <div></div>
    )
}

export default SideNav
