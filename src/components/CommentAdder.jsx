import React, { Component } from 'react';
import * as api from '../utils/api';

class CommentAdder extends Component {
  state = {
    username: this.props.user.username,
    body: '',
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    const newComment = this.state;
    const { article_id } = this.props;
    api.postComment(article_id, newComment).then(({ data: { comment } }) => {
      const postedComment = comment;
      this.props.addCommentToState(postedComment);
    });
    // reset comment state to remove comment text
    this.setState({ body: '' });
  };

  render() {
    const { user } = this.props;
    const { body } = this.state;
    const username = user.username;
    return (
      <form onSubmit={this.handleSubmitForm}>
        <p>{username} post a message</p>
        <label htmlFor="body">
          <textarea
            onChange={this.handleInputChange}
            name="body"
            id=""
            cols="60"
            rows="5"
            value={body}
            required
          />
        </label>
        <button>Post</button>
      </form>
    );
  }
}

export default CommentAdder;
