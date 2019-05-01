import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";
import App from "./App/App.container";
import store from "./App/store";
import { Provider } from "react-redux";
import Login from "./App/Component/Login/Login";
import F0F from "./App/F0F";
import SingleImage from "./App/Component/SingleImage/SingleImage.container";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route exact path="/F0F" component={F0F} />
        <Route path="/:id" component={SingleImage} />
        />
        <Route component={F0F} />
      </Switch>
    </Router>
  </Provider>,
  rootElement
);
