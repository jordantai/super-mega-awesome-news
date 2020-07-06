import React from 'react';
import { Link } from '@reach/router';
import { AppBar, Toolbar, Grid, Typography, Box } from '@material-ui/core';
import logo from './styling/img/SMAN-logo.png';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';

const Header = ({ user }) => {
  const { username } = user;
  return (
    <header className="main-header">
      <AppBar position="fixed" color="inherit" className="app-bar">
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item xs={9}>
              <Link to="/">
                <img
                  className="logo"
                  alt="Super Mega Awesome News logo"
                  src={logo}
                />
              </Link>
            </Grid>
            <Grid item>
              <Box className="login">
                <FaceRoundedIcon />
                <Typography>{username}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
