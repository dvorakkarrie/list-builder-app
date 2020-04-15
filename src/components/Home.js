import React, {Component} from 'react'
import {withAuth} from '@okta/okta-react'

import Login from "./Login"
import Signup from "./Signup"

class Home extends Component {

    render() {
        return (
            <div>
                <Login />
                <Signup />
            </div>
        )
    }    
}

export default withAuth(Home);