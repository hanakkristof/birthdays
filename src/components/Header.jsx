import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


const Header = () => {
  
  return (
    <div style={{backgroundColor:"beige", width:"100%", paddingTop:"15px", paddingBottom:"20px"}} className='d-flex justify-content-center align-items-top gap-3'>
        <div style={{fontWeight:"bold", fontSize:"2rem"}}>Today's Birthdays</div>
    </div>
  )
}

export default Header
