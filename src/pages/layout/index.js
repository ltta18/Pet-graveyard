import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Homepage from "../homepage";
import Cemetery from "../cemetery";
import Header from "../../components/common/Header";

const BasicLayout = () => (
  <div className="layout">
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/cemetery/:id" component={Cemetery} />
    </Switch>
  </div>
);

export default BasicLayout;
