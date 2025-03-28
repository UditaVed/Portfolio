import Link from 'next/link'
import React from 'react'
import Data from '../assets/data/profile.json'
const Navbar = () => {
  return (
    <div className='flex md:flex-row-reverse md:justify-normal gap-6 justify-center text-sm md:text-[16px]'>
        <Link href={Data.contacts[0].link} target='_blank' className='hover:text-black'>{Data.contacts[0].name}</Link>
        <Link href={Data.contacts[1].link} target='_blank' className='hover:text-black'>{Data.contacts[1].name}</Link>
        <Link href={Data.contacts[2].link} target='_blank' className='hover:text-black'>{Data.contacts[2].name}</Link>
        <Link href={Data.contacts[3].link} target='_blank' className='hover:text-black'>{Data.contacts[3].name}</Link>
    </div>
  )
}

export default Navbar
