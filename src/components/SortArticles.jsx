import React, { Component } from 'react';
import * as api from '../utils/api';

class SortArticles extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  // componentDidMount() {
  //   this.getArticles();
  // }

  // getArticles = () => {
  //   const { created_at } = this.props;
  //   api.fetchArticles(created_at).then((articles) => {
  //     this.setState({ articles, isLoading: false });
  //   });
  // };

  handleClick = (event) => {
    const { created_at } = this.props;
    api.fetchArticles(created_at).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  render() {
    return <button onClick={this.handleClick}>Sort by date</button>;
  }
}

export default SortArticles;
