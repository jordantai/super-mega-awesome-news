import React from 'react';

const Header = ({ user }) => {
  return (
    <header>
      <h1>Super Mega Awesome News</h1>
      <h2>
        The Superest Megaest Awesomest site on the planet for stories, news and
        articles!
      </h2>
      <section className="user">
        <ul>
          <li>Logged in</li>
          <li>
            <img src={user.avatar_url} alt="user avatar" />
          </li>
          <li>{user.username}</li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
