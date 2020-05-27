import React from 'react';
import { Link } from '@reach/router';

const ArticleCard = ({ article_id, title, body, votes, topic }) => {
  return (
    <article>
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{body}</p>
      <p>Votes: {votes}</p>
      <p>Topic: {topic}</p>
    </article>
  );
};

export default ArticleCard;
