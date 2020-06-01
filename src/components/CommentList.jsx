import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentCard from './CommentCard';
import Loader from 'react-loader-spinner';
import CommentAdder from './CommentAdder';
import ErrorDisplay from './ErrorDisplay';

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
        <Loader
          type="BallTriangle"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={6000}
        />
      );
    if (err) return <ErrorDisplay msg={err} />;
    return (
      <>
        <CommentAdder
          user={user}
          article_id={article_id}
          addCommentToState={this.addCommentToState}
        />
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id} className="comment">
                <CommentCard {...comment} />
                {user.username === comment.author && (
                  <button
                    onClick={() => {
                      this.handleCommentDelete(comment.comment_id);
                    }}
                  >
                    Delete Comment
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default CommentList;
