import React, { Component } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

class NavBar extends Component {
  state = {
    topics: [
      {
        slug: 'coding',
        description: 'Code is love, code is life',
      },
      {
        slug: 'cooking',
        description: 'Hey good looking, what you got cooking?',
      },
      {
        slug: 'football',
        description: 'FOOTIE!',
      },
    ],
  };

  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
