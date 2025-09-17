import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { motion } from "motion/react"

const Counter = ({count}) => {





  return (
    <motion.div style={{borderBottom:"solid black 2px", width:"40%", margin:"15px", textAlign:"center"}} animate={{rotate:360}}>
      {count>0 ? "People:" + count : "No more birthdays today"}
    </motion.div>
  )
}

export default Counter
