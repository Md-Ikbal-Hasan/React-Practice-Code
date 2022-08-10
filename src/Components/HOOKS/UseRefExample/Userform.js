import React, { useRef } from 'react'

const Userform = () => {

    const userNameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userNameRef.current.value);
        console.log(passwordRef.current.value);

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" ref={userNameRef} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" ref={passwordRef} />
            </div>
            <button type='submit'>Register</button>
        </form>
    )
}

export default Userform