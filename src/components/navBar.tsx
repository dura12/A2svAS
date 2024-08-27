import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
    <div className='grid grid-cols-12 p-8 text-[#565656] font-medium text-[20px]  border-2'>
        <div className='col-span-2'>
            <img src="/logo.svg" />
        </div>
        <div className='col-span-8 flex gap-20 items-center justify-center'>
        <Link href = "#">Home</Link>
        <Link href = "#">Team</Link>
        <Link href = "#">Success Stories</Link>
        <Link href = "#">About Us</Link>
        <Link href = "#">Blogs</Link>
        <Link href = "#">Get Involved</Link>
        </div>
       <div className='flex col-span-2 gap-5 mr-3'>
       <button className='font-extrabold'>login</button>
       <button className='w-[160px] h-[60px] rounded-[10px] bg-[#264FAD] text-white border-[1px] border-gray-400'>Donate</button>
       </div>
   
    </div>
  )
}

export default NavBar