import React from 'react'
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LostArkFacetSim from './LostArkFacetSim';
import Home from './Home';
import AboutMeTest from './AboutMeTest';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}>
        </Route>
        <Route exact path="/lostarkfacetsim" component={LostArkFacetSim}>
        </Route>
        <Route exact path="/aboutmetest" component={AboutMeTest}>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;