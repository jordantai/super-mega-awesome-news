import React, { Component } from 'react';
import * as api from '../utils/api';
import { IconButton, Button, Typography } from '@material-ui/core';
import { ThumbUpRounded, ThumbDownRounded } from '@material-ui/icons';

class VoteUpdater extends Component {
  state = {
    userVotes: 0,
    err: null,
  };

  handleVoteChange = (newVote) => {
    console.log(this.state.userVotes, +' ' + newVote);
    this.setState(({ userVotes }) => {
      return {
        userVotes: userVotes + newVote,
      };
    });
    const { path, id } = this.props;
    api.patchUserVotesById(path, id, newVote).catch((err) => {
      this.setState(({ userVotes }) => {
        return {
          userVotes: userVotes - newVote,
          err: 'Oops something went wrong with the vote',
        };
      });
    });
  };

  render() {
    const { votes } = this.props;

    const { userVotes, err } = this.state;
    return (
      <>
        <Typography>
          <span>Votes:</span> {votes + userVotes}
        </Typography>
        <IconButton
          aria-label="thumbs up"
          color="secondary"
          onClick={() => {
            this.handleVoteChange(1);
          }}
          disabled={userVotes !== 0}
        >
          <ThumbUpRounded />
        </IconButton>
        <IconButton
          aria-label="thumbs down"
          color="secondary"
          onClick={() => {
            this.handleVoteChange(-1);
          }}
          disabled={userVotes !== 0}
        >
          <ThumbDownRounded />
        </IconButton>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            this.handleVoteChange(-userVotes);
          }}
          disabled={userVotes === 0}
        >
          Undo
        </Button>
        {err && <p>{err}</p>}
      </>
    );
  }
}

export default VoteUpdater;
