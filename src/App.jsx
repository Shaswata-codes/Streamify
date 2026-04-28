import React from 'react'
import SideBar from './components/SideBar'
import Player from './components/Player'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <SideBar />
        <Player/>
      </div>
    </div>
  )
}

export default App
