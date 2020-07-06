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
    //const { sort_by, order } = this.state;
    const topicSlugHasChanged = prevProps.topic_slug !== topic_slug;
    // const sortByHasChanged = prevState.sort_by !== sort_by;
    // const orderHasChanged = prevState.sort_by !== order;
    // if (topicSlugHasChanged || sortByHasChanged || orderHasChanged) {
    //   this.getArticles();
    // }
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

  // handleSortByClick = (sort_by, order) => {
  //   this.getArticles(sort_by, order);
  // };

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
        <Loader
          type="BallTriangle"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={6000}
        />
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

          {/* <button
            onClick={() => {
              this.handleSortByClick('comment_count', 'asc');
            }}
          >
            Sort by comment count ascending
          </button>
          <button
            onClick={() => {
              this.handleSortByClick('comment_count', 'desc');
            }}
          >
            Sort by comment count descending
          </button>
          <button
            onClick={() => {
              this.handleSortByClick('votes', 'asc');
            }}
          >
            Sort by votes ascending
          </button>
          <button
            onClick={() => {
              this.handleSortByClick('votes', 'desc');
            }}
          >
            Sort by votes descending
          </button>
          <button
            onClick={() => {
              this.handleSortByClick('created_at', 'asc');
            }}
          >
            Sort by date posted ascending
          </button>
          <button
            onClick={() => {
              this.handleSortByClick('created_at', 'desc');
            }}
          >
            Sort by date posted descending
          </button> */}
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
