import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentCard from './CommentCard';
import Loader from 'react-loader-spinner';
import CommentAdder from './CommentAdder';

class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    const { article_id } = this.props;
    api.fetchComments(article_id).then((comments) => {
      this.setState({ comments, isLoading: false });
    });
  };

  render() {
    console.log('rendering...');
    const { user, article_id } = this.props;
    if (this.state.isLoading)
      return (
        <Loader
          type="BallTriangle"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={6000}
        />
      );
    return (
      <>
        <CommentAdder user={user} article_id={article_id} />
        <ul>
          {this.state.comments.map((comment) => {
            return (
              <li key={comment.comment_id} className="comment">
                <CommentCard {...comment} />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default CommentList;
