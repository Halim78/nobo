import React, { Component } from "react";
import "./css/App.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import MainPage from "../src/components/MainPage";
import DetailsPage from "../src/components/DetailsPage";
import NotFound from "../src/components/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/details/:id" component={DetailsPage} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
