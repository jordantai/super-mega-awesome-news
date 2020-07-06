import React, { Component } from 'react';
import * as api from '../utils/api';
import { TextareaAutosize, Button, Grid, Typography } from '@material-ui/core';

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
    this.setState({ body: '' });
  };

  render() {
    const { user } = this.props;
    const { body } = this.state;
    const username = user.username;
    return (
      <form>
        <Grid container alignItems="flex-end">
          <Grid item xs={12}>
            <Typography>{username} post a message:</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <TextareaAutosize
              aria-label="message input"
              placeholder="Message here"
              onChange={this.handleInputChange}
              name="body"
              rowsMin={8}
              value={body}
              required
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleSubmitForm}
            >
              Post
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default CommentAdder;
