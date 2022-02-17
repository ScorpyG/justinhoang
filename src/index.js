import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./App";
import Navigator from "./components/Navigator";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Error from "./components/Error";
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Router forceRefresh={true}>
      <Navigator />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contacts" component={Contacts} />
        <Route component={Error} />
      </Switch>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
