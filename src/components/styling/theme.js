import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#731810',
    },
    secondary: {
      main: '#F24405',
    },
    text: {
      secondary: '#569cda',
    },
  },
  typography: {
    fontFamily: ['Fredoka One', '"Nunito"'].join(','),
    h3: {
      fontFamily: 'Fredoka One',
    },
    h4: {
      fontFamily: 'Fredoka One',
      fontSize: '1.5rem',
    },
    h5: {
      fontFamily: 'Fredoka One',
    },
    body1: {
      fontFamily: 'Nunito',
    },
  },
});

export default theme;
