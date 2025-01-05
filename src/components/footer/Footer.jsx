import React from 'react'
import './Footer.css'
import { FaCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='py-10 footerline'>
        <hr /> 
        <p className='flex justify-center items-center gap-2 mt-4'><FaCopyright /> 2025 Pratham Matkar</p>
    </div>
  )
}

export default Footer