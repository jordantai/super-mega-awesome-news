import React from 'react';

const Header = ({ user }) => {
  return (
    <header className="main-header">
      <h1>Super Mega Awesome News</h1>
      <h2>
        The Superest Megaest Awesomest site on the planet for stories, news and
        articles!
      </h2>
      <section className="user">
        <p>Logged in</p>
        <p>
          <img src={user.avatar_url} alt="user avatar" />
        </p>
        <p>{user.username}</p>
      </section>
    </header>
  );
};

export default Header;
