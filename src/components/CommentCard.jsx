import React from 'react';

const CommentCard = ({ votes, created_at, author, body }) => {
  const formattedDate = new Date(created_at);
  return (
    <>
      <p>{body}</p>
      <p>Author: {author}</p>
      <p>Votes: {votes}</p>
      <p>Posted: {formattedDate.toString()}</p>
    </>
  );
};

export default CommentCard;
