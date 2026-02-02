import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../Utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();
      setVideos(json?.items || []);
    } catch (err) {
      console.error("Failed to fetch videos", err);
    }
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          info={video}
        />
      ))}
    </div>
  );
};

export default VideoContainer;
