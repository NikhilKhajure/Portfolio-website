import React from "react";
import Heading from "./Heading";
import { skills } from "../Data";
import Technology from "./Technology";
import { motion } from "framer-motion";
function Myskills() {
    return (
        <>
            <Heading heading="My Skills" />
            <div className="skills-section" id="skills">
                <p>As a front-end developer, I possess a mastery of HTML, CSS, and JavaScript, enabling me to craft captivating and responsive web interfaces.</p>
                <div className="skills">
                    <motion.div whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }} className="sk1">
                        {skills.slice(0, 3).map((val, idx) => {
                            return <div key={idx}>
                                <p style={{ display: "flex", justifyContent: "space-between", width: "90%", margin: "auto" }}><span>{val.skill}</span><span>{val.progress}</span></p>
                                <progress className="skill" value={val.progress} max="100">HTML</progress>
                            </div>
                        })}
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }} className="sk1">
                        {skills.slice(3, 6).map((val, idx) => {
                            return <div key={idx}>
                                <p style={{ display: "flex", justifyContent: "space-between", width: "90%", margin: "auto" }}><span>{val.skill}</span><span>{val.progress}</span></p>
                                <progress className="skill" value={val.progress} max="100">HTML</progress>
                            </div>
                        })}
                    </motion.div>
                </div>
                <Technology />
            </div>
        </>
    )
}
export default Myskills;