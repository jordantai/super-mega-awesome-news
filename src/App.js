import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import ErrorDisplay from './components/ErrorDisplay';
import { Grid } from '@material-ui/core';

class App extends Component {
  state = {
    user: {
      username: 'tickle122',
      avatar_url: 'https://img.icons8.com/color/20/000000/avatar.png',
    },
  };

  render() {
    const { user } = this.state;
    return (
      <Grid container justify="center">
        <Header user={user} />
        <Grid container>
          <Grid item xs={3}>
            <NavBar />
          </Grid>
          <Grid item xs={9}>
            <Router>
              <ArticleList path="/" user={user} />
              <ArticleList path="/topic/:topic_slug/articles" user={user} />
              <Article path="/articles/:article_id/*" user={user} />
              <ErrorDisplay default />
            </Router>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
