import React, { Component } from 'react'
import './style.css'
class EVENT_HANDLER_CLASS extends Component {

    constructor(props) {
        super(props)

        this.state = {
            changedValue: ''
        }
    }


    handleOnChange = (e) => {
        this.setState({
            changedValue: e.target.value
        }, () => {
            console.log(this.state.changedValue);
        })

    }


    render() {
        return (
            <div>

                <input type="text" name="" id="" onChange={this.handleOnChange} />
                <p>  Your Input Value : {this.state.changedValue} </p>
            </div>
        )
    }
}
export default EVENT_HANDLER_CLASS
