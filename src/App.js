import React, { Component } from 'react';
import './components/styling/App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import TopicList from './components/TopicList';
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
      <Grid container direction="column">
        <Header user={user} />

        <Grid item container xs={12}>
          <NavBar />
        </Grid>

        <Router component={Grid}>
          <ArticleList path="/" user={user} />
          <ArticleList path="/topic/:topic_slug/articles" user={user} />
          <Article path="/articles/:article_id/*" user={user} />
          <TopicList path="/topics" user={user} />
          <ErrorDisplay default />
        </Router>
      </Grid>
    );
  }
}

export default App;
