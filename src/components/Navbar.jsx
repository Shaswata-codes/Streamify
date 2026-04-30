import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className="w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white">
      
      {/* TOP ROW */}
      <div className="flex items-center justify-between">
        
        {/* Left - Arrows */}
        <div className="flex items-center gap-2">
          <img
            className="w-6 h-6 p-1 bg-black rounded-full cursor-pointer invert"
            src={assets.arrow_left}
            alt="Previous"
          />
          <img
            className="w-6 h-6 p-1 bg-black rounded-full cursor-pointer invert"
            src={assets.arrow_right}
            alt="Next"
          />
        </div>

        {/* Right - Profile */}
        <div>
          <p className="flex items-center justify-center text-black bg-purple-500 rounded-full cursor-pointer w-7 h-7">
            S
          </p>
        </div>

      </div>

      {/* SECOND ROW */}
      <div className="flex items-center gap-2 mt-4">
        <p className="px-4 py-1 text-black bg-white cursor-pointer rounded-2xl">All</p>
        <p className="px-4 py-1 bg-black cursor-pointer rounded-2xl">Music</p>
        <p className="px-4 py-1 bg-black cursor-pointer rounded-2xl">Podcasts</p>
      </div>

    </div>
  )
}

export default Navbar