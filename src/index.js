import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import page404 from "./pages/404";

ReactDOM.render(
  <>
    <Header />

    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route component={page404} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
