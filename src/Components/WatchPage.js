import React, { useEffect } from "react";
import { closemenu } from "../Utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closemenu());
  }, [dispatch]);

  if (!videoId) return <div>Video not found</div>;

  return (
    <div className="flex flex-col w-full p-4">

      {/* Top Section → Video + Live Chat */}
      <div className="flex gap-4">
        
        {/* Video Section */}
        <div className="flex-1">
          <iframe
            className="w-full h-[500px] rounded-lg"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Live Chat Section */}
        <div className="w-[400px] h-[500px] border rounded-lg shadow-md overflow-hidden">
          <LiveChat />
        </div>

      </div>

      {/* Comments Section */}
      <div className="mt-6">
        <CommentContainer />
      </div>

    </div>
  );
};

export default WatchPage;
