import React from 'react'
import Heading from './Heading'
import profile from '../assets/images/profile.png'
import { ABOUT_TEXT } from '../Data'
import ButtonCustom from './ButtonCustom';
import { motion } from 'framer-motion';
function About() {
    let data = ABOUT_TEXT[0].personalData;
    return (
        <>
            <Heading heading="About" />
            <div className="about" id='about'>
                <motion.img whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    src={profile} width="170%" alt="profile-image" />
                <div className="aboutme">
                    <motion.p whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                    >{ABOUT_TEXT[0].aboutMe}</motion.p>
                    <motion.table whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}>
                        <tbody>
                            <tr>
                                <th>Name :</th>
                                <td> {data.Name} </td>
                            </tr>
                            <tr>
                                <th>Date Of Birth :</th>
                                <td> {data.Date_of_birth} </td>
                            </tr>

                            <tr>
                                <th>Address :</th>
                                <td> {data.Address} </td>
                            </tr>
                            <tr>
                                <th>Email :</th>
                                <td> {data.Email} </td>
                            </tr>
                            <tr>
                                <th>Phone :</th>
                                <td> {data.Phone} </td>
                            </tr>
                        </tbody>
                    </motion.table>
                    <motion.div whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: .5 }}>
                        <ButtonCustom />
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default About
