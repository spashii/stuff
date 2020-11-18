import React from 'react';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const Theme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
