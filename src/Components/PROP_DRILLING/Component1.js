import React, { useState } from 'react'
import Component2 from './Component2';

const Component1 = () => {
    const [user, setUser] = useState({ id: 101, name: 'Ikbal' });
    return (
        <div>
            Component1

            <Component2 user={user} />


        </div>
    )
}

export default Component1