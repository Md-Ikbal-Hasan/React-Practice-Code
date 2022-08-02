import React, { useState } from 'react'

export default function FORM2() {

    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const { name, email, password } = user

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

    }

    const handleSubmit = (e) => {
        console.log("From Submitted");
        console.log(user);
        e.preventDefault();
        user = {
            name: "",
            email: "",
            password: "",
        }
    }

    return (
        <div>

            <h1> Registration2 (USE_STATE with Object)</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={handleChange} value={user.name} required />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={handleChange} value={user.email} required />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={handleChange} value={user.password} required />
                </div>

                <div>
                    <button type='Submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
