import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';
import ErrorDisplay from './ErrorDisplay';
import { Button, Grid } from '@material-ui/core';

class NavBar extends Component {
  state = {
    topics: [],
    err: '',
    anchorEl: null,
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

  // handleClick = (event) => {
  //   this.setState({
  //     anchorEl: event.target,
  //   });
  // };

  // handleClose = () => {
  //   this.setState({
  //     anchorEl: null,
  //   });
  // };

  render() {
    const { err } = this.state;
    if (err) return <ErrorDisplay msg={err} />;
    return (
      // <nav className="navbar">
      //   <Button
      //     aria-controls="simple-menu"
      //     aria-haspopup="true"
      //     onClick={this.handleClick}
      //   >
      //     Topics
      //   </Button>
      //   <Menu
      //     id="topics-menu"
      //     anchorEl={anchorEl}
      //     keepMounted
      //     open={Boolean(anchorEl)}
      //     onClose={this.handleClose}
      //   >
      //     {this.state.topics.map(({ slug, description }) => {
      //       return (
      //         <Link to={`/topic/${slug}/articles`}>
      //           <MenuItem key={slug} onClick={this.handleClose}>
      //             {description}
      //           </MenuItem>
      //         </Link>
      //       );
      //     })}
      //   </Menu>
      // </nav>
      // <nav className="navbar">
      //   <ul>
      //     <li>
      //       <button>
      //         <Link to="/">Home</Link>
      //       </button>
      //     </li>
      //     {this.state.topics.map(({ slug, description }) => {
      //       return (
      //         <li key={slug}>
      //           <button>
      //             <Link to={`/topic/${slug}/articles`}>{description}</Link>
      //           </button>
      //         </li>
      //       );
      //     })}
      //   </ul>
      // </nav>
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
