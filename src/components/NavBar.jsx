import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';
import ErrorDisplay from './ErrorDisplay';

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
      <nav className="navbar">
        <ul>
          <li>
            <button>
              <Link to="/">Home</Link>
            </button>
          </li>
          {this.state.topics.map(({ slug, description }) => {
            return (
              <li key={slug}>
                <button>
                  <Link to={`/topic/${slug}/articles`}>{description}</Link>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
