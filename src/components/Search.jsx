import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className='flex items-center gap-2 border border-black rounded-md w-96 p-2 sm:p-1'>
        <CiSearch size={28} />
        <input type='text' className='bg-transparent outline-none w-full' />
    </div>
  )
}

export default Search