import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className = "header">
            <h1>List Builder</h1>
            <Link to="/">
                <div className='home-div'>
                    Home
                </div>
            </Link>
            <button>Logout</button>
        </div>
    )
}

export default Header

