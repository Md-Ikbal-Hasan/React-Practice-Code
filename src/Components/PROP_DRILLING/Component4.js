import React, { useContext } from 'react'
import { UserContext } from './UserContext'
const Component4 = () => {

    const { user, text } = useContext(UserContext)

    console.log(user);
    return (
        <div>
            <h2> {text} </h2>
            <h2> {user.name} </h2>
            <h2> {user.id} </h2>
        </div>
    )
}

export default Component4