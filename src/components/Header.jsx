import React from 'react';
import { Link } from '@reach/router';

const Header = ({ user }) => {
  const { username, avatar_url } = user;
  return (
    <header className="main-header">
      <Link to="/">
        <h1 className="logo">Super Mega Awesome News</h1>
      </Link>
      <h2>
        The Superest Megaest Awesomest site on the planet for stories, news and
        articles!
      </h2>
      <section className="user">
        <button>
          <img src={avatar_url} alt="user avatar" />
          <span>▾</span>
        </button>
        <p>{username}</p>
      </section>
    </header>
  );
};

export default Header;
