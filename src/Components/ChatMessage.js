import React from "react";

const ChatMessage = ({ name, message, time }) => {
  return (
    <div className="flex items-start gap-2">
      <img
        alt="avatar"
        src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
        className="w-7 h-7 rounded-full"
      />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-800 text-xs">
            {name}
          </span>
          <span className="text-gray-400 text-[10px]">
            {time}
          </span>
        </div>
        <span className="text-gray-700 text-sm leading-snug">
          {message}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;
