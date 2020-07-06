import React from 'react';
import ReactDOM from 'react-dom';
import './components/styling/index.css';
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import theme from './components/styling/theme';
import App from './App';

let responsiveTheme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={responsiveTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
