import React from 'react'
import profile from "../assets/images/profile.png";
import Social from './Social';
import { motion } from 'framer-motion'
function Home() {
    const container = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, delay: delay }
        }
    })
    return (
        <>
            <div className="home" id='home'>
                <div className="headline">
                    <motion.span
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                    >Hello</motion.span>
                    <motion.p variants={container(0.5)}
                        initial="hidden"
                        animate="visible"><span>I'am</span> Nikhil</motion.p>
                    <motion.h3 variants={container(1)}
                        initial="hidden"
                        animate="visible">Full Stack Developer</motion.h3>
                    <motion.div variants={container(1.4)}
                        initial="hidden"
                        animate="visible" ><Social /></motion.div >
                </div>
                <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: .6 }}
                    src={profile} className='profile-image' alt="" />
            </div>
        </>
    )
}

export default Home
