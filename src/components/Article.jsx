import React, { Component } from 'react';
import * as api from '../utils/api';
import { Router, Link } from '@reach/router';
import CommentList from './CommentList';
import VoteUpdater from './VoteUpdater';
import Loader from 'react-loader-spinner';
import ErrorDisplay from './ErrorDisplay';
import { Typography, Grid, Button, Box } from '@material-ui/core';
import CalendarTodayRoundedIcon from '@material-ui/icons/CalendarTodayRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
    err: '',
  };

  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    const { article_id } = this.props;
    api
      .fetchArticle(article_id)
      .then((article) => {
        this.setState({ article, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err: err.response.data.msg, isLoading: false });
      });
  };

  render() {
    const {
      article_id,
      title,
      body,
      votes,
      topic,
      author,
      created_at,
      comment_count,
    } = this.state.article;
    const formattedDate = new Date(created_at);
    const { isLoading, err } = this.state;
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
        <article>
          <Grid container justify="space-between">
            <Grid item xs={9}>
              <Typography variant="h3">{title}</Typography>
            </Grid>
            <Grid item>
              <Typography className="post-date">
                <CalendarTodayRoundedIcon className="date-icon" />
                {formattedDate.toDateString()}
              </Typography>
            </Grid>

            <Typography>{body}</Typography>

            <Grid container justify="space-between">
              <Grid item xs={12} sm={6}>
                <Link to={`/topic/${topic}/articles`}>
                  <Box bgcolor="primary.main">
                    <Typography variant="h5">{topic}</Typography>
                  </Box>
                </Link>
              </Grid>
              <Grid item>
                <Typography>Author: {author}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <VoteUpdater votes={votes} id={article_id} path={'articles'} />
        </article>
        <section className="comments">
          <Link to="comments">
            <Button variant="contained" color="primary">
              <Typography variant="h4">
                <ChatRoundedIcon className="comment-icon" />
                Comments: {comment_count}
                <KeyboardArrowDownRoundedIcon />
              </Typography>
            </Button>
          </Link>
          <Router>
            <CommentList path="comments" user={this.props.user} />
          </Router>
        </section>
      </main>
    );
  }
}

export default Article;
