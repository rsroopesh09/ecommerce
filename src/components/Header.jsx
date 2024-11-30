import React from 'react'
import Search from './Search'
import { RxAvatar } from "react-icons/rx";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='flex items-center justify-between px-3 h-[10vh] shadow-md sm:flex-col sm:gap-1 sm:h-[20vh] sm:py-2'>
        <h1 className='font-medium text-2xl bg-gradient-to-r from-slate-50 via-sky-500 to-slate-50 py-1 font-serif'>Shopping</h1>
        <Search />
        <div className='flex items-center gap-8'>
            <FaCartShopping size={28} className='cursor-pointer' />
            <RxAvatar size={30} className='cursor-pointer' />
        </div>
    </div>
  )
}

export default Header