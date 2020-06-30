import React from 'react';
import { Link } from '@reach/router';
import VoteUpdater from './VoteUpdater';
import { Typography } from '@material-ui/core';

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
        <Typography variant="h3">{title}</Typography>
      </Link>

      <Typography>{body}</Typography>
      <Typography>
        <span>Topic:</span> {topic}
      </Typography>
      <Typography>
        <span>Posted:</span> {formattedDate.toString()}
      </Typography>
      <Typography>
        <span>Comment Count:</span> {comment_count}
      </Typography>
      <VoteUpdater votes={votes} id={article_id} path={'articles'} />
    </article>
  );
};

export default ArticleCard;
