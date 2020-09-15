import React from "react";
import HomePage from "./pages/homepage";
import Layout from "./pages/layout";
import history from "./utils/history";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter history={history}>
        <Layout />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
