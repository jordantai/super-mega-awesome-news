import React from 'react';
import VoteUpdater from './VoteUpdater';
import { Typography, Grid } from '@material-ui/core';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';

const CommentCard = ({ comment_id, votes, created_at, author, body }) => {
  const formattedDate = new Date(created_at);
  return (
    <Grid container justify="space-between">
      <Grid item xs={12}>
        <Typography>{body}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>
          <CalendarTodayRoundedIcon className="date-icon" />
          {formattedDate.toDateString()}
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <span>Author:</span> {author}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <VoteUpdater id={comment_id} votes={votes} path={'comments'} />
      </Grid>
    </Grid>
  );
};

export default CommentCard;
