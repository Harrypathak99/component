import React from 'react'
import Carousels from './home/Carousels'
import Profile from './home/Profile'
import Navbar from './Navbar'
import Header2 from './Header2'
import Posts from './home/Posts'


export default function Home() {
  return (
    <>
    <div className='flex flex-row flex-wrap mx-1'>
    <div className='w-[250px] hidden xl:block h-full'>
      <Header2 />
    </div>
    <div className='flexsize relative'>
    <Navbar />
    <div className='p-4 xl:px-16'>
          <Carousels />
          <br></br>
          <div className='flex flex-wrap'>
          <div className='w-9/12 bg-yellow-200'>
          <Posts />
          </div>
          <div className='w-3/12 bg-red-300'>
              some
          </div>
          </div>
    </div>
          
    </div>
    </div>
    </>
  )
}
