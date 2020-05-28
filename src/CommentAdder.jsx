import React, { Component } from 'react';

class CommentAdder extends Component {
  state = {};

  render() {
    const username = this.props.user.username;
    return (
      <form>
        <p>{username} post a message</p>
        <label htmlFor="body"></label>
        <textarea name="body" id="" cols="60" rows="5">
          Message...
        </textarea>
      </form>
    );
  }
}

export default CommentAdder;