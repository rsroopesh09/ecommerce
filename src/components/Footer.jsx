import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-sky-700 h-[10vh] text-white text-sm flex items-center px-3 gap-1'><p>Shopping</p> <FaRegCopyright size={18} /> <p>2024</p> </div>
  )
}

export default Footer