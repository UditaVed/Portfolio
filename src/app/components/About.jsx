import React from 'react'
import Data from '../assets/data/profile.json'
import Image from 'next/image'
import profileImage  from '../assets/green_kurta.jpg'
export const About = () => {
  return (
    <div>
        <div className='flex gap-6'>
            <Image
                src={profileImage}
                alt='profile'
                width={80}
                height={40}
                className="rounded-full"
            />
            <div className='flex-col'>
                <p className='text-xl font-medium'>👋 Hi, I am Udita</p>
                <p>A half frontend developer, half designer from India.</p>
                <p>21, she/her</p>
            </div>
            
        </div>
        
        <p className='font-medium mt-4'>about me.</p>
        <div className='mt-3'>{Data.about}</div>
        <div className='bg-[#27272A] w-fit h-fit px-3 font-light py-1 text-white rounded-md mt-4'>
            <div>Resume</div>
        </div>
    </div>
  )
}