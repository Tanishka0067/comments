import React, { useState } from "react";
import { SendHorizontal ,Reply} from "lucide-react";

const Comments = ({ comment, addReply, level }) => {
  const [replyText, setReplyText] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);

  return (
    <div style={{ marginLeft: level * 30 + "px" }} className="mt-4 border mx-auto bg-black text-white p-2 rounded-lg w-fit ">
      <div className="flex flex-row gap-4">
        <p>{comment.content}</p>
        <button onClick={() => setShowReplyBox(!showReplyBox)}> <Reply />  </button>
      </div>
      {showReplyBox && (
        <div className="flex flex-row items-center ">
          <input
          className="p-1 rounded-lg text-black px-4"
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
            className="p-2 m-2 bg-black border border-white rounded-full text-white">
            <SendHorizontal />
          </button>
        </div>
      )}
    </div>
  );
};

export default Comments;
