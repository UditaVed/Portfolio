import React from 'react'
import Data from '../assets/data/profile.json'
export const Experience = () => {
  return (
    <div>
        <div className='text-black'>worked as.</div>
        <div className='w-fit h-fit border-l-2 px-6 mt-8'>
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <div className='text-black text-sm md:text-lg'>{Data.work.title}</div>
                    <div className='text-sm md:text-[16px] hidden md:block'>Oct 2023 - Feb 2024 </div>
                </div>
                <div className='text-sm md:text-[16px]'>{Data.work.description}</div>
                <div className='bg-[#FFEDD5] w-fit h-fit p-4 rounded-md text-gray-800 text-sm md:text-[15px]'>Using React, NextJS, TailwindCSS for building frontend and UI and Figma to design layouts and design system.</div>
            </div>
        </div>
        
    </div>
  )
}
