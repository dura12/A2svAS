import React from 'react';

const Footer = () => {
  return (
    <footer className='border-[1px] border-gray-400 mt-16  py-10'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6'>
        {/* Logo and Description */}
        <div className='space-y-4'>
            <img src='/profile.svg'></img>
        
        </div>
        <div className='flex flex-col font-bold items-start space-y-4'>
          <p >
            We are dedicated to making a difference. Join us in our mission.
          </p>
          <button className='bg-blue-500 round hover:bg-blue-600 text-white px-4 py-2 rounded'>
            Support Us
          </button>
        </div>

        {/* Links Section */}
        <div className='space-y-4'>
          <h2 className='text-lg font-semibold'>Links</h2>
          <ul className='space-y-2'>
            <li><a href='#' className='hover:underline'>Home</a></li>
            <li><a href='#' className='hover:underline'>Success Stories</a></li>
            <li><a href='#' className='hover:underline'>About Us</a></li>
            <li><a href='#' className='hover:underline'>Get Involved</a></li>
          </ul>
        </div>

        {/* Team Section */}
        <div className='space-y-4'>
          <h2 className='text-lg font-semibold'>Team</h2>
          <ul className='space-y-2'>
            <li><a href='#' className='hover:underline'>Board Members</a></li>
            <li><a href='#' className='hover:underline'>Advisors</a></li>
            <li><a href='#' className='hover:underline'>Executives</a></li>
            <li><a href='#' className='hover:underline'>Staff</a></li>
          </ul>
        </div>

        {/* Blogs Section */}
        <div className='space-y-4'>
          <h2 className='text-lg font-semibold'>Blogs</h2>
          <ul className='space-y-2'>
            <li><a href='#' className='hover:underline'>Recent Blogs</a></li>
            <li><a href='#' className='hover:underline'>New Blogs</a></li>
          </ul>
        </div>

        {/* Social Media and Other Icons */}
        <div className='flex flex-col space-y-4'>
          <div className='flex space-x-4'>
            <a href='#' className='text-gray-400 hover:text-white'><i className='fab fa-facebook-f'></i></a>
            <a href='#' className='text-gray-400 hover:text-white'><i className='fab fa-twitter'></i></a>
            <a href='#' className='text-gray-400 hover:text-white'><i className='fab fa-instagram'></i></a>
            <a href='#' className='text-gray-400 hover:text-white'><i className='fab fa-linkedin-in'></i></a>
          </div>
    
        </div>
      </div>
      <div className='p-5 pb-0'>
      <div className='text-gray-400'>
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </div>
      </div>
    </footer>
  );
};

export default Footer;
