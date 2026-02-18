import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../Utils/chatSlice";
import ChatMessages from "./ChatMessage";
import { generateRandomMessage, generateRandomName } from "../Utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("API Polling");

      dispatch(
        addMessages({
          name: generateRandomName(),
          message: generateRandomMessage(10)+ "🚀",
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="border border-gray-200 rounded-lg h-[400px] overflow-y-scroll p-2 m-2 flex-col-reverse">
      {chatMessages.map((c, i) => (
        <ChatMessages key={i} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
