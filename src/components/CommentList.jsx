import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentCard from './CommentCard';
import Loader from 'react-loader-spinner';
import CommentAdder from './CommentAdder';
import ErrorDisplay from './ErrorDisplay';
import { Box, Grid, Button } from '@material-ui/core';

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true,
    err: '',
  };

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    const { article_id } = this.props;
    api
      .fetchComments(article_id)
      .then((comments) => {
        this.setState({ comments, isLoading: false, err: '' });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };

  addCommentToState = (newComment) => {
    this.setState((currentState) => {
      return {
        comments: [newComment, ...currentState.comments],
      };
    });
  };

  handleCommentDelete = (comment_id) => {
    api.deleteComment(comment_id).then((response) => {
      this.setState(({ comments }) => {
        const updatedComments = comments.filter((comment) => {
          return comment.comment_id !== comment_id;
        });
        return {
          comments: updatedComments,
        };
      });
    });
  };

  render() {
    const { isLoading, comments, err } = this.state;
    const { user, article_id } = this.props;
    if (isLoading)
      return (
        <Grid container justify="center">
          <Grid item xs={12}>
            <Loader
              className="loader"
              type="Puff"
              color="#00BFFF"
              height={500}
              width={500}
              timeout={6000}
            />
          </Grid>
        </Grid>
      );
    if (err) return <ErrorDisplay msg={err} />;
    return (
      <Grid container>
        <Grid item xs={12}>
          <Box bgcolor="primary.main">
            <CommentAdder
              user={user}
              article_id={article_id}
              addCommentToState={this.addCommentToState}
            />

            <Grid item>
              <ul>
                {comments.map((comment) => {
                  return (
                    <li key={comment.comment_id} className="comment">
                      <CommentCard {...comment} />
                      {user.username === comment.author && (
                        <Button
                          variant="contained"
                          color="secondary"
                          onClick={() => {
                            this.handleCommentDelete(comment.comment_id);
                          }}
                        >
                          Delete Comment
                        </Button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default CommentList;
