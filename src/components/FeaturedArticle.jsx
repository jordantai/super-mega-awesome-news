import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';
import Loader from 'react-loader-spinner';
import ErrorDisplay from './ErrorDisplay';
import { Typography } from '@material-ui/core';

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
    const article_id = () => {
      let min = Math.ceil(1);
      let max = Math.floor(36);
      return Math.floor(Math.random() * (max - min)) + min;
    };
    api
      .fetchArticle(article_id())
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };

  render() {
    const { article } = this.state;
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
        <Typography variant="h2" color="textSecondary">
          Featured Article
        </Typography>
        <ArticleCard {...article} />
      </main>
    );
  }
}

export default FeaturedArticle;
