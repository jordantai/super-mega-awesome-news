import React, { Component } from 'react';
import * as api from '../utils/api';

class VoteUpdater extends Component {
  // add a state var for current users vote count
  state = {
    userVotes: 0,
    err: null,
  };

  handleVoteChange = (event) => {
    let newVote = 0;
    if (event.target.className === 'vote-up') {
      newVote = 1;
    }
    if (event.target.className === 'vote-down') {
      newVote = -1;
    }

    // update UI optimistically
    this.setState(({ userVotes }) => {
      return {
        userVotes: userVotes + newVote,
      };
    });
    // make api request
    const { path, id } = this.props;
    api.patchUserVotesById(path, id, newVote).catch((err) => {
      this.setState(({ userVotes }) => {
        return {
          userVotes: userVotes + newVote,
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
        <button onClick={this.handleVoteChange} disabled={userVotes !== 0}>
          <span className="vote-up" role="img" aria-label="up arrow">
            ↑
          </span>
        </button>
        <button onClick={this.handleVoteChange} disabled={userVotes !== 0}>
          <span className="vote-down" role="img" aria-label="down arrow">
            ↓
          </span>
        </button>
        {err && <p>{err}</p>}
      </>
    );
  }
}

export default VoteUpdater;
