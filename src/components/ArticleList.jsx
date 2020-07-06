import React, { Component } from 'react';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';
import Loader from 'react-loader-spinner';
import ErrorDisplay from './ErrorDisplay';
import {
  Grid,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: '',
    order: '',
    err: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { topic_slug } = this.props;
    const topicSlugHasChanged = prevProps.topic_slug !== topic_slug;
    if (topicSlugHasChanged) {
      this.getArticles();
    }
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles = (sort_by, order) => {
    const { topic_slug } = this.props;
    api
      .fetchArticles(topic_slug, sort_by, order)
      .then((articles) => {
        this.setState({ articles, isLoading: false, err: '' });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };

  handleSortByChange = (event) => {
    this.setState({ sort_by: event.target.value });
  };
  handleOrderChange = (event) => {
    this.setState({ order: event.target.value });
  };

  handleClick = (sort_by, order) => {
    this.getArticles(sort_by, order);
  };

  render() {
    const { isLoading, err, sort_by, order } = this.state;
    const { topic_slug } = this.props;
    if (isLoading)
      return (
        <Grid container justify="center">
          <Grid item xs={12}>
            <Loader
              className="loader"
              type="Puff"
              color="#00BFFF"
              height={500}
              width={500}
              timeout={6000}
            />
          </Grid>
        </Grid>
      );
    if (err) return <ErrorDisplay msg={err} />;
    return (
      <main className="content">
        <Typography variant="h2" color="textSecondary">
          Articles
        </Typography>
        <Typography variant="h3" color="primary">
          {topic_slug}
        </Typography>
        <Grid item container xs={12}>
          <FormControl className="sortby">
            <InputLabel>Sort by</InputLabel>
            <Select
              style={{ color: '#569cda' }}
              value={sort_by}
              onChange={this.handleSortByChange}
            >
              <MenuItem value={'comment_count'}>Comment count</MenuItem>
              <MenuItem value={'votes'}>Votes</MenuItem>
              <MenuItem value={'created_at'}>Date created</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="order">
            <InputLabel>Order</InputLabel>
            <Select
              style={{ color: '#569cda' }}
              value={order}
              onChange={this.handleOrderChange}
            >
              <MenuItem value={'asc'}>Ascending</MenuItem>
              <MenuItem value={'desc'}>Descending</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => {
              this.handleClick(sort_by, order);
            }}
          >
            Sort
          </Button>
        </Grid>
        <ul className="article-list">
          <Grid container spacing={3}>
            {this.state.articles.map((article) => {
              return (
                <Grid key={article.article_id} item xs={12} sm={6}>
                  <li key={article.article_id}>
                    <Paper>
                      <ArticleCard {...article} />
                    </Paper>
                  </li>
                </Grid>
              );
            })}
          </Grid>
        </ul>
      </main>
    );
  }
}

export default ArticleList;
