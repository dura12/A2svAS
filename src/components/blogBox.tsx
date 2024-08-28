import React from 'react';
import { FaRegMessage } from "react-icons/fa6";
const Blog = () => {
  return (
    <div className='flex flex-col drop-shadow-3xl w-[450px] bg-white rounded-lg shadow-md'>
      <div className='w-full'>
        <img 
          className='w-full h-[300px] object-cover rounded-t-lg' 
          src='/p2.png' 
          alt='Blog post cover' 
        />
      </div>
      
    
      <div className='flex flex-col w-4/5 mt-4 mx-auto'>

        <h1 className='font-medium text-[20px] text-[#5E5873] mb-2'>
          Design Liberalized Exchange Rate Management
        </h1>
        <div className='flex items-center gap-4 mb-4'>
          <img 
            src='/p1.png' 
            className='w-[28px] h-[28px] rounded-full' 
            alt='Author' 
          />
          
            <p className=' text-[#5E5873] text-[24.43px]'>Dureti</p>
            <p className='font-medium text-[17.1px] text-[#9C9C9C]'>Jan 10, 2020</p>
        
        </div>
        
    
        <div className='flex gap-4 mb-4'>
          <button className='bg-[#F5F5F5] text-gray-500 rounded-full py-2 px-4'>
            button2
          </button>
          <button className='bg-[#F5F5F5] text-gray-500 rounded-full py-2 px-4'>
            button1
          </button>
        </div>
        
    
        <p className='text-[17px] text-[#868686] mt-2 text-center mb-4'>
          A little personality goes a long way, especially on a business blog. So don’t be afraid to let loose.
        </p>
        <hr className='my-4 border-gray-300 w-full' />
        <div className='flex p-6 justify-between items-center'>
  <p className='flex font-bold text-lg text-[#5E5873]'><FaRegMessage className='mr-2'/> 2.3k Likes</p>
  <button className='text-lg text-[#7367F0] font-medium'>Read More</button>
</div>

      </div>
    </div>
  );
};

export default Blog;
