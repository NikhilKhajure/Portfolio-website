import React from 'react'

function Subheading({ subHeading }) {
    return (
        <>
            <div className="subheading">
                <h3 style={{ textAlign: "center", color: "rgb(255, 189, 57)", fontSize: "2rem", fontWeight: "800" }}>{subHeading}</h3>
            </div>
        </>
    )
}

export default Subheading
