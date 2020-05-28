import React from 'react';
import { Link } from '@reach/router';

const ArticleCard = ({
  article_id,
  title,
  body,
  votes,
  topic,
  created_at,
  comment_count,
}) => {
  const formattedDate = new Date(created_at);
  return (
    <article>
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{body}</p>
      <p>Votes: {votes}</p>
      <p>Topic: {topic}</p>
      <p>Posted: {formattedDate.toString()}</p>
      <p>Comment Count: {comment_count}</p>
    </article>
  );
};

export default ArticleCard;
