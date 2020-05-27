import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';

class NavBar extends Component {
  state = {
    topics: [],
  };

  componentDidMount() {
    this.getTopics();
  }

  getTopics = () => {
    api.fetchTopics().then((topics) => {
      this.setState({ topics });
    });
  };

  render() {
    return (
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {this.state.topics.map(({ slug, description }) => {
            return (
              <li key={slug}>
                <Link to={`/topic/${slug}/articles`}>{description}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
