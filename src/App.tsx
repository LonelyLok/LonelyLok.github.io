import React from 'react'
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LostArkFacetSim from './LostArkFacetSim';
import Home from './Home';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}>
        </Route>
        <Route exact path="/lostarkfacetsim" component={LostArkFacetSim}>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;