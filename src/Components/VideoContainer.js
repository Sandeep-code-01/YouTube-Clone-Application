import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../Utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";


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
      // console.log(json);
    } catch (err) {
      console.error("Failed to fetch videos", err);
    }
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        const videoId =
          typeof video.id === "string"
            ? video.id
            : video.id?.videoId;

        return (
          <Link to={"/watch?v=" + videoId} key={videoId}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
