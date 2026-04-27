import React from 'react'
import { assets } from '../assets/assets'

const SideBar = () => {
    return (
        <div className='w-[25%] h-full p-2 text-white flex flex-col gap-2'>
            <div className='bg-[#121212] rounded flex flex-col justify-around p-4'>
                <div className='flex items-center gap-3 cursor-pointer'>
                    <img src={assets.home_icon} alt="" className='w-6' />
                    <p className='font-bold'>Home</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar