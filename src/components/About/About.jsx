import React from 'react'
import './About.css'
import Container from '../Container/Container'
import { motion } from 'framer-motion';


const ServiceArray = ["UIX","Web Development","App Development","GenAI","Data Analytics"]

const About = () => {
  return (
    <motion.div className='About'>
       {ServiceArray.map((service,index)=><Container heading={service} key={index}/>)}
    </motion.div>
  )
}

export default About;
