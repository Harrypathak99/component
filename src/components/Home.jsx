import React from 'react'
import Carousels from './home/Carousels'
import Profile from './home/Profile'


export default function Home() {
  return (
    <>
    <div className='flex mx-1'>
    <div className='w-1/5 h-full'></div>
    <div className='w-4/5 mt-2 flex flex-wrap justify-around'>
          <Carousels />
          <Profile />
          
    </div>
    </div>
    </>
  )
}
