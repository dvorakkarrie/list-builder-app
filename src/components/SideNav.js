import React from 'react'
import {Link} from 'react-router-dom';

const SideNav = () => {
    return (
        <div>
            <div><Link to='/lists'>Lists</Link></div>
            <div><Link to='/'>Items</Link></div>
            <div><a href='http://recipebits.surge.sh/'>Recipes</a></div>
        </div>
    )
}

export default SideNav
