import React from 'react'
import { FaStar } from "react-icons/fa";

const ProductCard = ({data}) => {
    const {title, rating, price, image} = data;
    const {rate, count} = rating;
  return (
    <div className='shadow-md w-60 flex flex-col gap-2 mb-8 cursor-pointer'>
        <div className='bg-gray-300 h-72 rounded-t-md'>
            <img src={image} alt='product image' className='w-full h-full object-cover'/>
        </div>
        <div className='flex flex-col gap-1 rounded-b-md mb-2'>
            <h3 className='text-md'>{title.length > 50 ? title.slice(0, 50) + ' ...' : title}</h3>
            <div className='flex items-center gap-2'>
              <div className='bg-green-600 px-1 text-white text-sm font-semibold rounded-md w-fit flex items-center gap-1'>{rate} <FaStar size={10} /></div> 
              <span className='text-sm text-gray-600 font-semibold'>({count})</span>
            </div>
            <p className='font-semibold text-lg'>$ {price}</p>
        </div>
    </div>
  )
}

export default ProductCard