import React from 'react'
import ButtonLists from './ButtonLists'
import VideoContainer from './VideoContainer'   

const MainContainer = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-900">Main Container</h1>
      <ButtonLists />
      <VideoContainer />
    </div>
  )
}

export default MainContainer
