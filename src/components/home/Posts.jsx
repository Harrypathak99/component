import React from 'react'
import image from './hello.jpg'
import { ArrowUturnRightIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'


const Posts = () => {
  return (
    <>
    <div className='flex flex-wrap justify-between'>
        <div className='Col-1 w-5/12 p-4'>
        <div className='flex flex-wrap'>
        <img className='w-[60px] h-[60px] object-cover rounded-full shadow-black shadow-sm' src={image} />
            <div className='flex flex-col ml-3'>
                <div className='font-semibold'>Harry Pathak</div>
                <div className='text-xs'>21 Feb, 2024</div>
                <div className='text-xs'>Kathmandu Nepal</div>
            </div>
        </div>
            <div className='font-semibold mt-2'>The title of the  post goes here which be extra long too</div>
            <p className='mt-1 text-sm h-[130px]'>The description goes here now and on.</p>

            <div className='flex mt-4 text-sm'>
                <div className='flex mr-4 bg-gray-300 rounded-xl px-2 py-1 items-center'>
                    <div className='h-4'><HeartIcon className='w-4 h-4 mr-1' /></div>
                    <div>50K</div>
                    <div><HeartIcon /></div>
                </div>
                <div className='flex COMMENT mr-4 bg-gray-300 rounded-xl px-2 py-1 items-center'>
                    <div className='h-4'><ChatBubbleBottomCenterIcon className='w-4 h-4 mr-1'/></div>
                    <div>931</div>
                </div>
                <div className='flex SHARE mr-4 bg-gray-300 rounded-xl px-2 py-1 items-center'>
                    <div className='h-4'><ShareIcon className='w-4 h-4 mr-1'/></div>
                    <div>Share</div>
                </div>
            </div>
        </div>

        <div className='Col-2 w-7/12 py-4 px-2'>
            <img className='w-full h-full object-cover rounded-2xl' src={image} />
        </div>

        {/* <div className='Col-3 w-3/12 p-2'>
            <div className=' flex font-semibold justify-center'>Top comments</div>
            <div className='text-sm'>
                <div className='flex justify-between'>
                    <div className='flex gap-1'><img className='w-[20px] h-[20x] object-cover rounded-full shadow-black shadow-sm' src={image} /> Ryan Renolds</div>
                    <div className='flex items-center'>100&nbsp;<HeartIcon className='w-4 h-4 mr-1'/></div>
                </div>
                <div className='pl-1'>This is the comment.</div>
                <div className='flex items-center pl-1'><ArrowUturnRightIcon className='w-4 h-4 mr-1'/> Replies</div>
            </div>
        </div> */}
    </div>
    </>
  )
}

export default Posts