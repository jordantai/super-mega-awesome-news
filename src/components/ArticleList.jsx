import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';
import Loader from 'react-loader-spinner';

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    api.fetchArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  render() {
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
      <main>
        <ul>
          {this.state.articles.map((article) => {
            return (
              <li key={article.article_id}>
                <ArticleCard {...article} />
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

export default ArticleList;
