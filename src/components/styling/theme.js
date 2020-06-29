import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#731810',
    },
    secondary: {
      main: '#F24405',
    },
  },
  typography: {
    fontFamily: ['Fredoka One'].join(','),
  },
});

export default theme;
