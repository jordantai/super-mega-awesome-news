import React, { Component } from 'react';
import { Link } from '@reach/router';
import ErrorDisplay from './ErrorDisplay';
import * as api from '../utils/api';
import { Card, Button, Grid, CardContent, Typography } from '@material-ui/core';

class TopicList extends Component {
  state = {
    topics: [],
    err: '',
    isLoading: true,
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
    const { topics, err } = this.state;
    if (err) return <ErrorDisplay msg={err} />;
    return (
      <ul className="topic-list">
        <Grid item container xs={12} spacing={2}>
          {topics.map(({ slug, description }) => {
            return (
              <Grid key={slug} item xs={12} sm={6}>
                <li>
                  <Card variant="outlined" className="topic-card">
                    <CardContent>
                      <Link to={`/topic/${slug}/articles`}>
                        <Typography variant="h3">{slug}</Typography>
                      </Link>
                      <Typography>{description}</Typography>
                      <Grid container item xs={12} justify="flex-end">
                        <Link to={`/topic/${slug}/articles`}>
                          <Button variant="outlined" color="secondary">
                            View Articles
                          </Button>
                        </Link>
                      </Grid>
                    </CardContent>
                  </Card>
                </li>
              </Grid>
            );
          })}
        </Grid>
      </ul>
    );
  }
}

export default TopicList;
