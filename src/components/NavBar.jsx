import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';
import ErrorDisplay from './ErrorDisplay';
import { Button, Grid } from '@material-ui/core';

class NavBar extends Component {
  state = {
    topics: [],
    err: '',
  };

  componentDidMount() {
    this.getTopics();
  }

  getTopics = () => {
    api
      .fetchTopics()
      .then((topics) => {
        this.setState({ topics, err: '' });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };

  render() {
    const { err } = this.state;
    if (err) return <ErrorDisplay msg={err} />;
    return (
      <Grid item xs={12}>
        <nav className="navbar">
          <Link to="/">
            <Button color="primary" variant="contained">
              Home
            </Button>
          </Link>
          <Link to="/topics">
            <Button color="primary" variant="contained">
              Topics
            </Button>
          </Link>
          <Link to="/articles">
            <Button color="primary" variant="contained">
              Articles
            </Button>
          </Link>
        </nav>
      </Grid>
    );
  }
}

export default NavBar;
