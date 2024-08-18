import React from 'react'
import "./static/Resume.css";
import Heading from "./Heading"
import { Education, EXPERIENCES, skills } from "../Data";
import Subheading from './Subheading';
import ButtonCustom from './ButtonCustom';
import { motion } from 'framer-motion';
function Resume() {
    let arr = [-100, 100, -100, 100];
    return (
        <>
            <Heading heading="Resume" />
            <Subheading subHeading="Education" />
            <div className="resume" id='resume'>
                {Education.slice(0, 2).map((val, idx) => {
                    return < motion.div key={idx} whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: arr[idx] }}
                        transition={{ duration: 0.5 }}
                        class="card" id={idx}>
                        <div class="card2">
                            <span>{val.year}</span>
                            <strong>{val.stream}</strong>
                            <i>{val.branch}</i>
                            <p>{val.description}</p>
                            <i>{val.marks}</i>
                        </div>
                    </motion.div>
                })}
            </div>
            <div className="resume">
                {Education.slice(2).map((val, idx) => {
                    return <motion.div key={idx} whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: arr[idx] }}
                        transition={{ duration: 0.5 }} class="card" id={idx}>
                        <div class="card2">
                            <span>{val.year}</span>
                            <strong>{val.stream}</strong>
                            <i>{val.branch}</i>
                            <p>{val.description}</p>
                            <i>{val.marks}</i>
                        </div>
                    </motion.div>
                })}
            </div>
            <Subheading subHeading="Work Experience And Certification Courses" />
            <div className="resume">
                {EXPERIENCES.map((val, idx) => {
                    return <motion.div class="card" id={idx} whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: arr[idx] }}
                        transition={{ duration: 0.5 }}>
                        <div class="card2">
                            <span>{val.year}</span>
                            <strong>{val.role}</strong>
                            <i>{val.company}</i>
                            <p>{val.description}</p>
                            <div className="technology">
                                {val.technologies.map((skill, i) => {
                                    return <i key={i}>{skill}</i>
                                })}
                            </div>

                        </div>
                    </motion.div>
                })}
            </div>
            <ButtonCustom />
        </>
    )
}

export default Resume
