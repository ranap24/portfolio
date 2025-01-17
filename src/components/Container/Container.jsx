import {AnimatePresence, delay, motion} from 'framer-motion'
import React from 'react'
import './Container.css'
import { FaArrowRightLong } from "react-icons/fa6"

const Container = ({heading}) => {
  return (
      <motion.div className='Container'>
        <div className='Container_Content'>
          <p>{heading}</p>
        </div>
        <div className='arrow_mark_container'>
         <p>Know more</p>
         <div>
        <FaArrowRightLong  color='#252525' size={42} strokeWidth={0.1} />
         </div>
        </div>
    </motion.div>
  )
}

export default Container;
