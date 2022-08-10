import React, { Component, createRef } from 'react'

export default class UserForm extends Component {

    constructor(props) {
        super(props);
        this.userNameRef = createRef();

        this.state = {

        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submitted');
        console.log(this.userNameRef.current.value);
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" ref={this.userNameRef} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" />
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
