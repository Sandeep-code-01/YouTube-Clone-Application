import React from "react";
import { getRelativeTime } from "../Utils/date"; 

const VideoCard = ({ info }) => {
  if (!info || !info.snippet) return null;

  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;

  // Function to format views in K/M
  const formatViews = (num) => {
    if (!num) return "Views not available";
    const n = Number(num);
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M views";
    if (n >= 1_000) return (n / 1_000).toFixed(1) + "K views";
    return n + " views";
  };

  const views = formatViews(statistics?.viewCount);
  const publishedTime = getRelativeTime(publishedAt);

  return (
    <div className="w-72 m-3 cursor-pointer hover:scale-[1.02] transition-transform">
      {/* Thumbnail */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={thumbnails?.medium?.url}
          alt={title}
          className="w-full"
        />
      </div>

      {/* Video Info */}
      <div className="flex mt-3">
        {/* Channel Icon */}
        <img
          src={thumbnails?.default?.url}
          alt={channelTitle}
          className="w-10 h-10 rounded-full mr-3"
        />

        <div className="flex flex-col">
          <h3 className="font-semibold text-sm leading-snug line-clamp-2">
            {title}
          </h3>

          <p className="text-gray-500 text-xs mt-1">{channelTitle}</p>

          <p className="text-gray-500 text-xs">
            {views} • {publishedTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
