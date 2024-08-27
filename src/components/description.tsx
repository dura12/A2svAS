'use client';
import React, { useEffect, useState } from 'react';
import Blog from './blogBox';
import { useSearchParams } from 'next/navigation';
import { useGetDescriptionQuery } from '@/lib/service/CardServices';

interface Author {
  _id: string;
  name: string;
  email: string;
  image: string;
  role: string;
}

interface BlogPostProps {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: Author | null;
  isPending: boolean;
  tags: string[];
  likes: number;
  relatedBlogs: any[];
  skills: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Description = () => {
  const [job, setJob] = useState<BlogPostProps | null>(null);
  const searchParams = useSearchParams();
  const queryId = searchParams.get('id') || '';

  const { isLoading, isError, data, isSuccess } = useGetDescriptionQuery(queryId);

  useEffect(() => {
    if (isSuccess && data) {
    
      setJob(data);
    }
  }, [isSuccess, data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  if (!job) {
    return <div>No data found</div>;
  }

  const { title, description, image, author } = job;

  return (
    <div className='flex flex-col items-center justify-center mt-10'>
      <div className='grid w-4/5 mb-10 gap-6'>
        <h1 className='font-light text-center text-[48px] p-5 pb-2'>{title}</h1>
        <p className='font-light text-center text-[#737373] text-[16px]'>{description}</p>
        <img className='w-full h-[800px] object-cover' src={image} alt='Main content' />
        {author && (
          <div className='flex flex-col items-center'>
            <img className='w-[80px] h-[80px] rounded-full' src={author.image} alt='Author' />
            <div className='flex items-center justify-center mt-2'>
              <p className='mr-2'>{author.name} |</p>
              <p>{author.role}</p>
            </div>
            <p>{author.email}</p>
          </div>
        )}
        <h2 className='text-bold text-[30px] mt-8'>
          We know that data structure and algorithms can seem hard at first glance. And you may not be familiar with advanced algorithms, but there are simple steps you can follow to see outstanding results in a short period of time.
        </h2>
        <p className='text-[24px] text-[#737373] w-full font-extralight mt-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='flex mt-10 gap-16'>
          <Blog />
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </div>
  );
}

export default Description;
