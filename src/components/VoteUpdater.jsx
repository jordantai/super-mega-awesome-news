import React, { Component } from 'react';

class VoteUpdater extends Component {
  // add a state var for current users vote count
  state = {
    userVotes: 0,
  };

  render() {
    const { votes } = this.props;
    const { userVotes } = this.state;
    return (
      <>
        <p>Votes: {votes + userVotes}</p>
        <button onClick={this.handleVoteIncrement}>
          <span role="img" aria-label="up arrow">
            ↑
          </span>
        </button>
        <button onClick={this.handleVoteDecrement}>
          <span role="img" aria-label="down arrow">
            ↓
          </span>
        </button>
      </>
    );
  }
}

export default VoteUpdater;
