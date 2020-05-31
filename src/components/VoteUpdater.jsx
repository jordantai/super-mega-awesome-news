import React, { Component } from 'react';
import * as api from '../utils/api';

class VoteUpdater extends Component {
  // add a state var for current users vote count
  state = {
    userVotes: 0,
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
    const { article_id } = this.props;
    api.patchUserVotesById(article_id, newVote);
  };

  render() {
    const { votes } = this.props;
    const { userVotes } = this.state;
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
      </>
    );
  }
}

export default VoteUpdater;
