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
      <div className="App">
        <Header user={this.state.user} />
        <NavBar />
        <Router>
          <ArticleList path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
