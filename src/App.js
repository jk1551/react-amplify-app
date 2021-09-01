import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";


function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" component={Home} exact />
      </Switch>
    </div>
  );
}

export default App;
