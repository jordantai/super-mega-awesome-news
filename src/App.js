import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ArticleList from './components/ArticleList';

class App extends Component {
  state = {
    user: {
      username: 'jordan101',
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
            <ArticleList path="/" />
            <ArticleList path="/topic/:topic_slug/articles" />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
