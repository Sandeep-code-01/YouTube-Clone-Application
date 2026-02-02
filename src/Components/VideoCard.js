import React from "react";

const VideoCard = ({ info }) => {
  if (!info || !info.snippet) return null;

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails , channelThumbnail} = snippet;

  return (
    <div className="w-72 m-3 cursor-pointer">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={thumbnails?.medium?.url}
          alt={title}
          className="rounded-xl w-full hover:scale-105 transition-transform duration-200"
        />
      </div>

      {/* Content */}
      <div className="mt-3">
        <h3 className="font-semibold text-sm line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-500 text-xs mt-1">
          {channelTitle}
        </p>

        <p className="text-gray-500 text-xs">
          {statistics?.viewCount
            ? `${Number(statistics.viewCount).toLocaleString()} views`
            : "Views not available"}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
