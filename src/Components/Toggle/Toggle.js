import React, { useState } from 'react'

const Toggle = () => {

    const [toggle, setToggle] = useState(true);
    // console.log(toggle);
    return (
        <div style={{ margin: "1rem", backgroundColor: "pink", padding: "1rem" }}>

            {toggle && (
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, facere! Voluptatum repellendus magni aperiam inventore deserunt labore! Officia animi iusto earum cumque delectus a. Provident officiis sed eveniet earum quo.</p>

            )}

            <div style={{ textAlign: "center" }}>

                <button onClick={() => {
                    setToggle(!toggle)
                }}>
                    {toggle ? "Hide" : "Show"}
                </button>

            </div>
        </div>
    )
}

export default Toggle