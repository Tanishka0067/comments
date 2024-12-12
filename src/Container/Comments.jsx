import React, { useState } from "react";
import { SendHorizontal ,Reply} from "lucide-react";

const Comments = ({ comment, addReply, level }) => {
  const [replyText, setReplyText] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);

  return (
    <div style={{ marginLeft: level * 30 + "px" }} className="mt-4 bg-gray-900 text-white p-2 rounded-lg w-fit ">
      <div>
        <p>{comment.content}</p>
        <button onClick={() => setShowReplyBox(!showReplyBox)}> <Reply />  </button>
      </div>
      {showReplyBox && (
        <div className="flex flex-row items-center ">
          <input
          className="p-1 rounded-lg text-black"
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
           
          />

          <button
            onClick={() => {
              addReply(comment.id, replyText);
              setReplyText("");
              setShowReplyBox(false);
            }}
            className="p-2 m-2 bg-gray-400 rounded-full text-white">
            <SendHorizontal />
          </button>
        </div>
      )}
    </div>
  );
};

export default Comments;
