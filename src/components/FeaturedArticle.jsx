import React, { Component } from 'react';
import * as api from '../utils/api';
import { Router, Link } from '@reach/router';
import CommentList from './CommentList';
import VoteUpdater from './VoteUpdater';
import Loader from 'react-loader-spinner';
import ErrorDisplay from './ErrorDisplay';

class FeaturedArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    err: '',
  };

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    const article_id = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    };

    api
      .fetchArticle(article_id(1, 36))
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };

  render() {
    const {
      article_id,
      title,
      body,
      votes,
      topic,
      author,
      created_at,
      comment_count,
    } = this.state.article;
    const formattedDate = new Date(created_at);
    const { isLoading, err } = this.state;
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
      <main className="content">
        <h2>Featured Article</h2>
        <article>
          <h3>{title}</h3>
          <p>{body}</p>
          <p>Topic: {topic}</p>
          <p>Author: {author}</p>
          <p>Posted: {formattedDate.toString()}</p>
          <p>Comments: {comment_count}</p>
          <VoteUpdater votes={votes} id={article_id} path={'articles'} />
        </article>
        <section className="comments">
          <Link to="comments">
            <h3>Comments</h3>
          </Link>
          <Router>
            <CommentList path="comments" user={this.props.user} />
          </Router>
        </section>
      </main>
    );
  }
}

export default FeaturedArticle;
