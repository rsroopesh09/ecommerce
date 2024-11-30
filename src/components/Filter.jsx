import React, {useState, useEffect} from 'react'
import { FaStar } from "react-icons/fa";

const Filter = () => {
  const [allCategories, setAllCategories] = useState([]);
  useEffect(()=>{
    fetchAllCategories();
  }, [])
  const fetchAllCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setAllCategories(data);
    } catch (err) {
        console.error('all categories fetching error: ', err.message);
    }
  }
  return (
    <div className='min-w-72 border-r-2 sm:border-r-0 sm:border-b-2 sm:absolute sm:top-[20vh] sm:left-0 sm:w-full sm:h-52'>
        <h3 className='text-lg font-medium uppercase p-3'>Filter</h3>
        <div className='p-3 flex flex-col gap-4 sm:flex-row sm:justify-between'>
          <div className='text-sm sm:text-xs'>
            <p className='uppercase font-semibold mb-1'>categories</p>
            {allCategories?.length > 0 && allCategories?.map((category, index) => (
              <div key={index} className='pl-4 flex items-center gap-2 mb-1 sm:pl-0'>
                <div><input type='checkbox' /></div> 
                <div>{category}</div>
              </div>
            ))}
          </div>
          <div className='text-sm sm:text-xs'>
            <p className='uppercase font-semibold mb-1'>price</p>
            <input type='range' />
          </div>
          <div className='text-sm sm:text-xs'>
            <p className='uppercase font-semibold mb-1'>customer ratings</p>
              <div className='pl-4 flex items-center gap-2 mb-1 sm:pl-0'>
                <div><input type='checkbox' /></div> 
                <div className='flex items-center gap-1'><span>4</span> <FaStar size={12} /> <span>& above</span></div>
              </div>
              <div className='pl-4 flex items-center gap-2 mb-1 sm:pl-0'>
                <div><input type='checkbox' /></div> 
                <div className='flex items-center gap-1'><span>3</span> <FaStar size={12} /> <span>& above</span></div>
              </div>
              <div className='pl-4 flex items-center gap-2 mb-1 sm:pl-0'>
                <div><input type='checkbox' /></div> 
                <div className='flex items-center gap-1'><span>2</span> <FaStar size={12} /> <span>& above</span></div>
              </div>
              <div className='pl-4 flex items-center gap-2 mb-1 sm:pl-0'>
                <div><input type='checkbox' /></div> 
                <div className='flex items-center gap-1'><span>1</span> <FaStar size={12} /> <span>& above</span></div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Filter