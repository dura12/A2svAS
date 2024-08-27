import React from 'react';

const Blog = () => {
  return (
    <div className='flex flex-col border border-gray-300 w-[450px] bg-white rounded-lg shadow-md'>
      <div className='w-full'>
        <img 
          className='w-full h-[300px] object-cover rounded-t-lg' 
          src='/p2.png' 
          alt='Blog post cover' 
        />
      </div>
      
      {/* Content Section */}
      <div className='flex flex-col w-4/5 mt-4 mx-auto'>
        {/* Blog Title */}
        <h1 className='font-medium text-[20px] text-[#5E5873] mb-2'>
          Design Liberalized Exchange Rate Management
        </h1>

        {/* Blog Description */}
        <p className='text-[24px] text-[#737373] w-full font-extralight mb-4 text-center'>
          qidunt ut labore et dolore magna aliquatrud ex
        </p>
        

        <div className='flex items-center gap-4 mb-4'>
          <img 
            src='/p1.png' 
            className='w-[28px] h-[28px] rounded-full' 
            alt='Author' 
          />
          
            <p className='font-medium text-[24.43px]'>Dureti</p>
            <p className='font-medium text-[17.1px] text-[#9C9C9C]'>Date</p>
        
        </div>
        
    
        <div className='flex gap-4 mb-4'>
          <button className='bg-[#737373] text-white rounded-full py-2 px-4'>
            button2
          </button>
          <button className='bg-[#737373] text-white rounded-full py-2 px-4'>
            button1
          </button>
        </div>
        
    
        <p className='text-[17px] text-[#868686] mt-2 text-center mb-4'>
          A little personality goes a long way, especially on a business blog. So don’t be afraid to let loose.
        </p>
        <hr className='my-4 border-gray-300' />
        <div className='flex p-6 justify-between items-center'>
  <p className='font-medium text-lg text-[#5E5873]'>2.3k Likes</p>
  <button className='text-lg text-[#7367F0] font-medium'>Read More</button>
</div>

      </div>
    </div>
  );
};

export default Blog;
