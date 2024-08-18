import React from 'react'
import Resume from "../assets/Nikhil_Resume.pdf";
function ButtonCustom() {
    return (
        <div style={{ textAlign: "center", width: "50%", margin: "auto" }}>
            <a href={Resume} download>
                <button class="btn">
                    <span class="btn-text-one">DOWNLOAD RESUME</span>
                    <span class="btn-text-two">THANKS !</span>
                </button>
            </a>
        </div>
    )
}

export default ButtonCustom
