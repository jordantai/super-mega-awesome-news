import React from 'react';
import { Link } from '@reach/router';
import { Typography, Grid, Button, Box } from '@material-ui/core';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';

const ArticleCard = ({
  article_id,
  title,
  body,
  votes,
  topic,
  created_at,
  comment_count,
  author,
}) => {
  const formattedDate = new Date(created_at);
  const snippet = body.substring(0, 200) + '...';
  return (
    <article>
      <Grid container justify="space-between">
        <Grid item xs={9}>
          <Link to={`/articles/${article_id}`}>
            <Typography variant="h4">{title}</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Typography className="post-date">
            <CalendarTodayRoundedIcon className="date-icon" />
            {formattedDate.toDateString()}
          </Typography>
        </Grid>
      </Grid>

      <Typography className="snippet">
        {snippet}
        <Button
          className="read-more-btn"
          color="secondary"
          variant="outlined"
          size="small"
          href={`/articles/${article_id}`}
        >
          Read more...
        </Button>
      </Typography>

      <Grid container justify="space-between">
        <Grid item xs={12} sm={6}>
          <Typography>
            <span>Author:</span> {author}
          </Typography>
          <Link to={`/topic/${topic}/articles`}>
            <Box bgcolor="primary.main">
              <Typography variant="h5">{topic}</Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item>
          <Typography>
            <span>Votes:</span> {votes}
          </Typography>
          <Typography>
            <ChatRoundedIcon className="comment-icon" /> {comment_count}
          </Typography>
        </Grid>
      </Grid>
    </article>
  );
};

export default ArticleCard;
