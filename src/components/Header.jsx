import React from 'react';
import { Link } from '@reach/router';
import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';

const Header = ({ user }) => {
  const { username, avatar_url } = user;
  return (
    <header className="main-header">
      <AppBar position="fixed" color="inherit" className="app-bar">
        <Toolbar>
          <Grid item xs={11}>
            <Link to="/">
              <h1 className="logo">Super Mega Awesome News</h1>
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Button className="login">Login</Button>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* <section className="user">
        <button>
          <img src={avatar_url} alt="user avatar" />
          <span>▾</span>
        </button>
        <p>{username}</p>
      </section> */}
    </header>
  );
};

export default Header;
