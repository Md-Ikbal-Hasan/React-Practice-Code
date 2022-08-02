import React, { Component } from 'react'
import './style.css'
import HomePage from './HomePage'
import LogInPage from './LogInPage'


class CONDITIONAL_RENDERING extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        const { isLoggedIn } = this.state
        if (isLoggedIn) {
            return <HomePage />
        }
        else {
            return <LogInPage />
        }
    }
}
export default CONDITIONAL_RENDERING
