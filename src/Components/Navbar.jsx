import React, { useState, useEffect } from 'react'

function Navbar() {
    const [ManageNavbar, setManageNavbar] = useState(false);
    const handleNavbar = () => {
        setManageNavbar(!ManageNavbar);
    }
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let navbarClasses = ['navbar'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }

    return (
        <>
            <div className={navbarClasses.join(' ')}>
                <div className="navlist" style={{ top: ManageNavbar ? "7%" : "-550%" }}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#resume">Resume</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
                <input id="checkbox" type="checkbox" onClick={handleNavbar} />
                <label className="toggle" htmlFor="checkbox">
                    <div id="bar1" className="bars"></div>
                    <div id="bar2" className="bars"></div>
                    <div id="bar3" className="bars"></div>
                </label>


            </div>
        </>
    )
}

export default Navbar
