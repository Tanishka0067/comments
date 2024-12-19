import React from "react";
import Comments from "./Comments";

const CommentList = ({ comments, addReply, level = 0 }) => {
  return (
    <div className="relative">
      {comments.map((comment) => (
        <div key={comment.id} >
          {level > 0 && (
            <div
              style={{ left: level * 30 - 20 + "px" }}
              className="absolute -top-4 h-full min-w-4 z-0   border-l border-b rounded-bl-lg mx-1  border-white"
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
