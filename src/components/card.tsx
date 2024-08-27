
'use client';
import React, { useState, useEffect } from 'react';
import { useGetAllJobsQuery } from '@/lib/service/CardServices';
import { useRouter } from 'next/navigation';

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
}

const Card = () => {
  const [jobs, setJobs] = useState<BlogPostProps[]>([]);
  const { isLoading, isError, data, isSuccess } = useGetAllJobsQuery({});
  const router = useRouter();

  useEffect(() => {
    if (isSuccess && data) {
      setJobs(data);
    }
  }, [isSuccess, data]);

  const handleClick = (id: string) => {
    router.push(`/Description?id=${id}`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className='flex flex-col items-center mt-10'>
      {jobs.slice(0,5).map((item) => (
        <div
          key={item._id}
          onClick={() => handleClick(item._id)}
          className='grid grid-cols-12 w-full max-w-screen-xl mb-10 gap-6 border-t-[1px] p-3 border-gray-300  justify-center items-center cursor-pointer'
        >
          <div className='flex flex-col col-span-7 gap-5'>
            <div className='flex gap-5'>
              <img
                src={item.image}
                className='w-[89px] h-[89px] rounded-full'
                alt='Blog post'
              />
              <div className='flex flex-col gap-1'>
                {item.author ? (
                  <>
                    <p className='font-medium text-[24.43px]'>{item.author.name}</p>
                    <p className='font-medium text-[17.1px] text-[#9C9C9C]'>Software Company</p>
                  </>
                ) : (
                  <p className='font-medium text-[24.43px]'>Unknown Author</p>
                )}
              </div>
              <p className='text-[17px] text-[#868686] mt-2'>{new Date(item.updatedAt).toLocaleDateString()}</p>
            </div>
            <h1 className='font-semibold text-[34px]'>{item.title}</h1>
            <p className='font-light text-[#737373] text-[24px]'>{item.description}</p>
            <div className='flex gap-5'>
              {item.tags.map((tag, index) => (
                <button key={index} className='bg-[#737373] text-gray-700 rounded-[100px] p-4'>
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className='col-span-5 ml-6'>
            <img
              src={item.image}
              className='w-[450px] h-[295px]'
              alt='Blog post'
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;

