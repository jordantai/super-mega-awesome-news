import React, { Component } from 'react';
import * as api from '../utils/api';

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
      title,
      body,
      votes,
      topic,
      author,
      created_at,
      comment_count,
    } = this.state.article;
    return (
      <main className="content">
        <article>
          <h3>{title}</h3>
          <p>{body}</p>
          <p>Votes: {votes}</p>
          <p>Topic: {topic}</p>
          <p>Author: {author}</p>
          <p>Posted: {created_at}</p>
          <p>Comments: {comment_count}</p>
        </article>
      </main>
    );
  }
}

export default Article;
