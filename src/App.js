import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import ErrorDisplay from './components/ErrorDisplay';

class App extends Component {
  state = {
    user: {
      username: 'tickle122',
      avatar_url: 'https://img.icons8.com/color/30/000000/avatar.png',
    },
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Header user={this.state.user} />
          <NavBar />
          <Router>
            <ArticleList path="/" user={this.state.user} />
            <ArticleList
              path="/topic/:topic_slug/articles"
              user={this.state.user}
            />
            <Article path="/articles/:article_id/*" user={this.state.user} />
            <ErrorDisplay default />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
