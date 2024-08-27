

'use client';
import React, { useState, useEffect } from 'react';
import { useGetSuccessStoryQuery } from '@/lib/service/CardServices';
import { useRouter } from 'next/navigation';
interface Story {
    _id: string;
    heading: string;
    paragraph: string;
  }
  
  interface Person {
    _id: string;
    personName: string;
    imgURL: string;
    role: string;
    location: string;
    story: Story[];
  }
  
  interface FetchDataResponse {
    data: Person[];
  }
  
const Card = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const { isLoading, isError, data, isSuccess } = useGetSuccessStoryQuery({});
  const router = useRouter();

  useEffect(() => {
    if (isSuccess && data) {
        console.log(data)
      setPeople(data);
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
      {people.map((person) => (
        <div
          key={person._id}
          onClick={() => handleClick(person._id)}
          className='grid grid-cols-12 w-full max-w-screen-xl mb-10 gap-6 justify-center items-center cursor-pointer'
        >
          <div className='flex flex-col col-span-7 gap-5'>
            <div className='flex gap-5'>
              <img
                src={person.imgURL}
                className='w-[89px] h-[89px] rounded-full'
                alt={`${person.personName}'s image`}
              />
              <div className='flex flex-col gap-1'>
                <p className='font-medium text-[24.43px]'>{person.personName}</p>
                <p className='font-medium text-[17.1px] text-[#9C9C9C]'>{person.role}</p>
                <p className='font-medium text-[17.1px] text-[#9C9C9C]'>{person.location}</p>
              </div>
            </div>
            {person.story.map((entry) => (
              <div key={entry._id} className='mb-4'>
                <h2 className='font-semibold text-[28px]'>{entry.heading}</h2>
                <p className='font-light text-[#737373] text-[20px]'>{entry.paragraph}</p>
              </div>
            ))}
          </div>
          <div className='col-span-5 ml-6'>
            <img
              src={person.imgURL}
              className='w-[450px] h-[295px]'
              alt={`${person.personName}'s story image`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;

