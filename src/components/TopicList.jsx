import React, { Component } from 'react';
import { Link } from '@reach/router';
import ErrorDisplay from './ErrorDisplay';
import * as api from '../utils/api';
import { Card, Button, Grid, CardContent } from '@material-ui/core';

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
                  <Link to={`/topic/${slug}/articles`}>
                    <Card variant="outlined" className="topic-card">
                      <CardContent>
                        <h3>{slug.toUpperCase()}</h3>
                        <p>{description}</p>
                        <Grid container item xs={12} justify="flex-end">
                          <Button variant="outlined" color="secondary">
                            View Articles
                          </Button>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Link>
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
