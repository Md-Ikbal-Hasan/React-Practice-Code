import React from 'react'
import Component4 from './Component4'

const Component3 = ({ user }) => {
    return (
        <div>Component3
            <Component4 user={user} />
        </div>
    )
}

export default Component3