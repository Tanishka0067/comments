import React from "react";
import Comments from "./Comments";

const CommentList = ({ comments, addReply, level = 0 }) => {
  return (
    <div className="relative">
      {comments.map((comment) => (
        <div key={comment.id} className="relative">
          {level > 0 && (
            <div
              style={{ left: level * 30 - 25 + "px" }}
              className="absolute top-0 h-full border border-white"
            ></div>
          )}

         
          <Comments 
            comment={comment} 
            addReply={addReply} 
            level={level} 
          />

          <CommentList 
            comments={comment.replies} 
            addReply={addReply} 
            level={level + 1} 
          />
        </div>
      ))}
    </div>
  );
};

export default CommentList;