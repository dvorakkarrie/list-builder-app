import React from 'react'
import {Link} from 'react-router-dom';

const SideNav = () => {
    return (
        <div>
            <div><Link to='/lists'>My Lists</Link></div>
            <div><Link to='/items'>My Items</Link></div>
            <div><Link to='/tasks'>My Tasks</Link></div>
            <div>
                {/* <a href='http://recipebits.surge.sh/'> */}
                    Recipes
                {/* </a> */}
            </div>
        </div>
    )
}

export default SideNav
