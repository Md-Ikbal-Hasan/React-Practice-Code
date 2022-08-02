import React from 'react'

const Child = (props) => {

    const data = "I am from child component";
    props.onChildData(data); // sending data form child to parent



    return (
        <div>
            <p>I am child </p>
            <p> {props.data} </p>

        </div>
    )
}

export default Child
