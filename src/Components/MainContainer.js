import React from 'react'
import ButtonLists from './ButtonLists'
import VideoContainer from './VideoContainer'   

const MainContainer = () => {
  return (
    <div className="p-4 flex flex-col gap-6">
      <ButtonLists />
      <VideoContainer />
    </div>
  )
}

export default MainContainer
