import React, { useState } from "react";
import CommentList from "./CommentList";
import { SendHorizontal } from "lucide-react";

const initialComments = [
  {
    id: 1,
    content: "This is the first comment",
    replies: [
      {
        id: 2,
        content: "This is a reply to the first comment",
        replies: [
          {
            id: 3,
            content: "This is a nested reply",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    content: "This is another top-level comment",
    replies: [],
  },
];

const CommentSection = () => {
  const [comments, setComments] = useState(initialComments);
  const [newCommentText, setNewCommentText] = useState("");

  const addReply = (commentId, replyText) => {
    const addReplyToComment = (comments) =>
      comments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              { id: Date.now(), content: replyText, replies: [] },
            ],
          };
        }
        return {
          ...comment,
          replies: addReplyToComment(comment.replies),
        };
      });

    setComments(addReplyToComment(comments));
  };

  const addNewComment = () => {
    if (newCommentText.trim()) {
      setComments([
        ...comments,
        { id: Date.now(), content: newCommentText, replies: [] },
      ]);
      setNewCommentText("");
    }
  };

  return (
    <div className="p-3">
      <div className="flex flex-row items-center ">
        <input
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Write a new comment..."
          className="p-1 rounded-lg"
        />
        <button
          onClick={addNewComment}
          className="p-2 m-2 bg-gray-400 rounded-full text-white"
        >
          <SendHorizontal />
        </button>
      </div>

      <CommentList comments={comments} addReply={addReply} />
    </div>
  );
};

export default CommentSection;
