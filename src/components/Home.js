import React, {Component} from 'react'
import {withAuth} from '@okta/okta-react'

import Login from "./Login"
import Signup from "./Signup"

class Home extends Component {

    async componentDidMount() {
        const authenticated = await this.props.auth.isAuthenticated();

        if (authenticated !== false) {
            console.log('User is authenticated??')
            const user = await this.props.auth.getUser();
            console.log(user)
        } else {
            console.log('User is not authenticated')
        }    
    }

    render() {
        return (
            <>
                <Login />
                <Signup />
                <h1>Login page</h1>
                <button onClick={() => this.props.auth.login()}>sign in</button>
            </>
        )
    }    
}

export default withAuth(Home);