import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';
import Loader from 'react-loader-spinner';
import ErrorDisplay from './ErrorDisplay';
//import SortArticles from './SortArticles';

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: '',
    order: '',
    err: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { topic_slug } = this.props;
    const { sort_by, order } = this.state;
    const topicSlugHasChanged = prevProps.topic_slug !== topic_slug;
    const sortByHasChanged = prevState.sort_by !== sort_by;
    const orderHasChanged = prevState.sort_by !== order;
    if (topicSlugHasChanged || sortByHasChanged || orderHasChanged) {
      this.getArticles();
    }
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles = (sort_by, order) => {
    const { topic_slug } = this.props;
    api
      .fetchArticles(topic_slug, sort_by, order)
      .then((articles) => {
        this.setState({ articles, isLoading: false, err: '' });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };

  handleSortByClick = (sort_by, order) => {
    this.getArticles(sort_by, order);
  };

  render() {
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
        <button
          onClick={() => {
            this.handleSortByClick('comment_count', 'asc');
          }}
        >
          Sort by comment count ascending
        </button>
        <button
          onClick={() => {
            this.handleSortByClick('comment_count', 'desc');
          }}
        >
          Sort by comment count descending
        </button>
        <button
          onClick={() => {
            this.handleSortByClick('votes', 'asc');
          }}
        >
          Sort by votes ascending
        </button>
        <button
          onClick={() => {
            this.handleSortByClick('votes', 'desc');
          }}
        >
          Sort by votes descending
        </button>
        <button
          onClick={() => {
            this.handleSortByClick('created_at', 'asc');
          }}
        >
          Sort by date posted ascending
        </button>
        <button
          onClick={() => {
            this.handleSortByClick('created_at', 'desc');
          }}
        >
          Sort by date posted descending
        </button>
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
