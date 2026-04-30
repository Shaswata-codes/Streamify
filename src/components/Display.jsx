import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DsiplayAlbum from './DsiplayAlbum'

const Display = () => {
  return (
    <div className='w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-y-auto overflow-x-hidden lg:w-[75%]'>
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DsiplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display