import React from 'react'


const ChatMessages = ({name,message}) => {
  return (
    <div className='flex items-center  shadow-sm px-2'>
     <img
     alt="user"
     src='https://yt4.ggpht.com/ytc/AIdro_mIq3VHfPUrGhS9seKsJqeGzc2vC6doz0-nM2OENLkRxafGhMnaFzOjB0stCwcIPBngbw=s32-c-k-c0x00ffffff-no-rj'/>
     <span className='font-bold px-1'>{name}</span>
     <span>{message}</span>
    </div>
  )
}

export default ChatMessages
