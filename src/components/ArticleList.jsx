import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';
import Loader from 'react-loader-spinner';
//import SortArticles from './SortArticles';

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidUpdate(prevProps, prevState) {
    const { topic_slug } = this.props;
    if (prevProps.topic_slug !== topic_slug) {
      this.getArticles();
    }
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles = () => {
    const { topic_slug } = this.props;
    api.fetchArticles(topic_slug).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  handleClick = (sort_by) => {
    console.log('clicked');
    // getArticles... where is the sort_by coming from

    // api.fetchArticles('comment_count').then((articles) => {
    //   this.setState({ articles, isLoading: false });
    // });
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
      <main className="content">
        {/* <SortArticles articles={this.state.articles} /> */}
        <button onClick={this.handleClick}>Sort by Comment Count</button>
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
