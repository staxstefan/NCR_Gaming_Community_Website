import React from "react";
// Styles
import "./App.css";

// Components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Portal from './components/pages/Portal/Portal'
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/portal" exact component={Portal}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
