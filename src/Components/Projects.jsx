import React from 'react'
import Heading from './Heading'
import { PROJECTS } from '../Data'
import "./static/Project.css"
import img1 from '../assets/images/recipe.jpg'
import img2 from '../assets/images/travel.png'
import img3 from '../assets/images/portfolio.png'
import img4 from '../assets/images/chatapp.webp'
import { motion } from 'framer-motion'
function Projects() {
    const ImgLink = [img1, img2, img3, img4];
    const arr = [-100, 100, -100, 100]
    return (
        <>
            <Heading heading="Projects" />
            <div className="resume" id='projects'>
                {PROJECTS.slice(0, 2).map((val, idx) => {
                    return <motion.div key={idx} whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: arr[idx] }}
                        transition={{ duration: 0.5 }} class="card" id={idx}>
                        <div class="card2">
                            <span>{val.title}</span>
                            <p>{val.description}</p>
                            <div>
                                {val.technologies.map((value, idx) => {
                                    return <strong key={idx} className="tech"> {value} </strong>
                                })}
                            </div>
                            <div>
                                <a href={val.project_link} target='_blank'><button id="golive">Go Live</button></a>
                            </div>
                        </div>
                    </motion.div>
                })}
            </div>
            <div className="resume">
                {PROJECTS.slice(2).map((val, idx) => {
                    return <motion.div key={idx} whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: arr[idx] }}
                        transition={{ duration: 0.5 }} class="card" id={idx}>
                        <div class="card2">
                            <span>{val.title}</span>
                            <p>{val.description}</p>
                            <div>
                                {val.technologies.map((value, idx) => {
                                    return <strong key={idx} className="tech"> {value} </strong>
                                })}
                            </div>
                            <div>
                                <a href={val.project_link} target='_blank'><button id="golive">Go Live</button></a>
                            </div>
                        </div>
                    </motion.div>
                })}
            </div>
        </>
    )
}

export default Projects
