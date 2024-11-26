import React from 'react'
import Data from '../assets/data/profile.json'
import Image from 'next/image'
import profileImage  from '../assets/green_kurta.jpg'
export const About = () => {
  return (
    <div>
        <div className='flex flex-col items-center md:justify-normal md:flex-row gap-6 '>
            <Image
                src={profileImage}
                alt='profile'
                width={80}
                height={40}
                className="rounded-full"
            />
            <div className='flex items-center flex-col md:block'>
                <p className='text-lg md:text-xl text-black'>Hi, I am Udita ✨</p>
                <p className='text-center text-sm md:text-[16px]'>A half frontend developer, <br className='md:hidden'/>half designer from India.</p>
                <p className='text-sm md:text-[16px]'>21, she/her</p>
            </div>
            
        </div>
        
        <p className='mt-7 text-black text-[15px] md:text-[16px]'>about me.</p>
        <div className='mt-3 md:text-[16px] text-[14px]'>{Data.about}</div>
        <div className='bg-[#27272A] w-fit h-fit px-3 font-light py-1 text-white rounded-md mt-4 md:text-[16px] text-[14px]'>
            <a href={Data.resume} target='_blank'>Resume</a>
        </div>
    </div>
  )
}