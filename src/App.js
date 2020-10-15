import React from "react";
import Layout from "./pages/layout";
import history from "./utils/history";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({  
  typography: {
    fontFamily: 
    '"Barlow", -apple-system, Roboto, sans-serif',
  },
  h4: {
      fontWeight: 700,
    },
});

function App() {
  return (
    <React.StrictMode>
      <MuiThemeProvider theme={theme}>
        <BrowserRouter history={history}>
          <Layout />
        </BrowserRouter>
      </MuiThemeProvider>
      
    </React.StrictMode>
  );
}

export default App;
