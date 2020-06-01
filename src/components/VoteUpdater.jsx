import React, { Component } from 'react';
import * as api from '../utils/api';

class VoteUpdater extends Component {
  state = {
    userVotes: 0,
    err: null,
  };

  handleVoteChange = (newVote) => {
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
        <p>Votes: {votes + userVotes}</p>
        <button
          onClick={() => {
            this.handleVoteChange(1);
          }}
          disabled={userVotes !== 0}
        >
          <span role="img" aria-label="up arrow">
            ↑
          </span>
        </button>
        <button
          onClick={() => {
            this.handleVoteChange(-1);
          }}
          disabled={userVotes !== 0}
        >
          <span role="img" aria-label="down arrow">
            ↓
          </span>
        </button>
        {err && <p>{err}</p>}
      </>
    );
  }
}

export default VoteUpdater;
