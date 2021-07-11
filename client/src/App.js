import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import AddMovie from "./pages/AddMovie";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";

class App extends React.Component {
  render() {
    return (
      <div className="App ui container">
        < Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
