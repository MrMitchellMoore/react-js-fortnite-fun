import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Item from "./components/ItemDetail";

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={Item} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
