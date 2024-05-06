import React from 'react'
import image from './hello.jpg'

const Cards = () => {
  return (
    <div className='flex flex-row w-full h-[200px] cursor-pointer bg-blue-gray-100 text-white rounded-xl overflow-hidden'>
    
    <img className='object-cover rounded-xl' src={image} />
    
    <div className='absolute bottom-0 pb-3 bg-gradient-to-t from-black to-transparent rounded-xl'>
    <div className='mx-4 mb-2 text-sm font-semibold uppercase z-10 relative'>This is the heading which can be long too. so buckle up</div>
    <div className='mx-4 relative flex flex-wrap justify-between text-sm'>
    <div className='flex gap-2 items-center'>
        <div className='rounded-2xl w-7 h-7 overflow-hidden'><img className='object-cover h-full' src={image} /></div>
        <div className=''>Hari Pathak</div>
        </div>
        <div className='px-2 pt-0.5'>sports</div>
    </div>
    </div>
    </div>
  )
}

export default Cards