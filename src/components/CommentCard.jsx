import React from 'react';
import VoteUpdater from './VoteUpdater';

const CommentCard = ({ comment_id, votes, created_at, author, body }) => {
  const formattedDate = new Date(created_at);
  return (
    <>
      <p>{body}</p>
      <p>Author: {author}</p>
      <p>Posted: {formattedDate.toString()}</p>
      <VoteUpdater id={comment_id} votes={votes} path={'comments'} />
    </>
  );
};

export default CommentCard;
