import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { animate, motion } from 'framer-motion';
function Technology() {
    const iconVarient = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    })
    return (
        <div className='technology'>
            <motion.div variants={iconVarient(2.5)}
                initial="initial"
                animate="animate"
            >
                <FaReact className='t-icon' />
            </motion.div>
            <motion.div variants={iconVarient(3)}
                initial="initial"
                animate="animate"
            >
                <FaNodeJs className='t-icon' />
            </motion.div>
            <motion.div variants={iconVarient(4.5)}
                initial="initial"
                animate="animate"
            >
                <SiMongodb className='t-icon' />
            </motion.div>
            <motion.div variants={iconVarient(5)}
                initial="initial"
                animate="animate"
            >
                <FaJava className='t-icon' />
            </motion.div>
            <motion.div variants={iconVarient(2.5)}
                initial="initial"
                animate="animate"
            >
                <DiJavascript className='t-icon' />
            </motion.div>
        </div>
    )
}

export default Technology
