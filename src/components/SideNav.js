import React from 'react'
import {Link} from 'react-router-dom';

const SideNav = () => {
    return (
        <div>
            
            <div><Link to='/lists'>My Lists</Link><Link to='/new-list'> (+)</Link></div>
            <div><Link to='/items'>My Items</Link><Link to='/new-item'> (+)</Link></div>
            <div><Link to='/tasks'>My Tasks</Link></div>
            <div><Link to="/users">My Users</Link><Link to='/new-user'> (+)</Link></div>
            <div>
                <a href='http://recipebits.surge.sh/'>
                    Recipes
                </a>
            
            </div>
        </div>
    )
}

export default SideNav
