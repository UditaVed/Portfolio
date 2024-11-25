import React from 'react'
import Data from '../assets/data/profile.json'
export const Experience = () => {
  return (
    <div>
        <div>worked as.</div>
        <div className='w-fit h-fit border-l-2 px-6 mt-8'>
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <div>{Data.work.title}</div>
                    <div>Oct 2023 - Feb 2024 </div>
                </div>
                <div>{Data.work.description}</div>
                <div className='bg-[#FFEDD5] w-fit h-fit p-4 rounded-md text-sm'>Using React, NextJS, TailwindCSS for building frontend and UI and Figma to design layouts and design system.</div>
            </div>
        </div>
        
    </div>
  )
}
