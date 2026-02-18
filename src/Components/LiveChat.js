import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../Utils/chatSlice";
import ChatMessage from "./ChatMessage";
import { generateRandomMessage, generateRandomName } from "../Utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat?.messages || []);
  const [liveMessage, setLiveMessage] = useState("");
  const chatRef = useRef(null);

  // Fake incoming messages
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomName(),
          message: generateRandomMessage(15),
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [dispatch]);

  // Auto scroll to bottom
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatMessages]);

  const handleSend = () => {
    if (!liveMessage.trim()) return;

    dispatch(
      addMessages({
        name: "You",
        message: liveMessage,
      })
    );

    setLiveMessage("");
  };

  return (
    <div className="border rounded-md bg-white flex flex-col h-[500px]">

      {/* Header */}
      <div className="px-3 py-2 border-b text-sm font-medium">
        Live Chat
      </div>

      {/* Messages */}
      <div
        ref={chatRef}
        className="flex-1 overflow-y-auto px-3 py-2 space-y-2 text-sm"
      >
        {chatMessages.map((msg, index) => (
          <ChatMessage
            key={index}
            name={msg.name}
            message={msg.message}
          />
        ))}
      </div>

      {/* Input */}
      <div className="border-t p-2 flex gap-2">
        <input
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border rounded px-2 py-1 text-sm outline-none"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="text-sm px-3 py-1 border rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
