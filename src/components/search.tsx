import React from 'react'

const Search = () => {
  return (
    <div className='flex mt-16 gap-8'>
       <div className='font-extrabold ml-28 text-[32px] '>Blogs</div>
       <button className='w-[380px] h-[66px] ml-96 rounded-[100px] border-[1px] border-[#CFCFCF
]'>search</button>
       <button className='w-[193px] h-[66px] rounded-[100px] text-white bg-[#264FAD]'>+ New Blog</button>
    </div>
  )
}

export default Search