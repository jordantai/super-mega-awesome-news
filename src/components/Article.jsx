import React, { Component } from 'react';
import * as api from '../utils/api';
import { Router, Link } from '@reach/router';
import CommentList from './CommentList';
import VoteUpdater from './VoteUpdater';

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  componentDidMount() {
    console.log('mounted');
    this.getArticle();
  }

  getArticle = () => {
    const { article_id } = this.props;
    api.fetchArticle(article_id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  };

  render() {
    console.log('rendering...');
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
    return (
      <main className="content">
        <article>
          <h3>{title}</h3>
          <p>{body}</p>
          <p>Topic: {topic}</p>
          <p>Author: {author}</p>
          <p>Posted: {formattedDate.toString()}</p>
          <p>Comments: {comment_count}</p>
          <VoteUpdater votes={votes} article_id={article_id} />
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

export default Article;
