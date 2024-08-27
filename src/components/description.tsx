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
    <div className='flex flex-col items-center w-2/3 justify-center mt-10'>
      <div className='grid w-4/5 mb-10 gap-6'>
        <h1 className='font-light text-center text-[48px] pt-5 pb-2'>{title}</h1>
        <p className='font-light text-center text-[#737373] text-[16px]'>PROGRAMMING | TECH READ</p>
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
            {job.title}
            </h2>
        <p className='text-[24px] text-[#737373] w-full font-extralight mt-6'>
            {job.description}     </p>
        <div className='flex mt-10 gap-16'>
          <Blog />
          <Blog />
          <Blog />
        </div>
      </div>
    </div>
  );
}

export default Description;
