import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className='flex '>
        <span>  
        <h1 className="text-3xl flex font-semibold text-gray-900">Body</h1>
      <SideBar />
      <MainContainer />
      </span>
    </div>
  )
}

export default Body
