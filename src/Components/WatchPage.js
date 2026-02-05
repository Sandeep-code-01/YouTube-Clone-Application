import React, { useEffect } from 'react'
import {closemenu } from '../Utils/appSlice';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';


const WatchPage = () => {
  const [searchParams] = useSearchParams();
   console.log(searchParams.get("v"));  


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closemenu());
  }, []);
  return (
    <div>
    
      <iframe width="1000px" height="500px"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage
