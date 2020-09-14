import React from "react";
import HomePage from "./pages/homepage";
import Layout from "./pages/layout";
import history from "./utils/history";
import { BrowserRouter } from "react-router-dom";

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
