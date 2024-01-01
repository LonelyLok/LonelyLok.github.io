import React from 'react'
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LostArkFacetSim from './LostArkFacetSim';
import Home from './Home';
import AboutMeTest from './AboutMeTest';
import Resume from './Resume';
import VideoGameFootageMenu from './VideoGameFootageMenu';
import WorkInProgress from './WorkInProgress';
import MonsterHunterWorldVideo from './MonsterHunterWorldVideo';
import MonsterHunterRiseVideo from './MonsterHunterRiseVideo';
import { SplitHelper } from './SplitHelper'

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
        <Route exact path="/resume" component={Resume}>
        </Route>
        <Route exact path="/videogamefootagemenu" component={VideoGameFootageMenu}>
        </Route>
        <Route exact path="/wip" component={WorkInProgress}>
        </Route>
        <Route exact path="/monsterhunterworldvideo" component={MonsterHunterWorldVideo}>
        </Route>
        <Route exact path="/monsterhunterrisevideo" component={MonsterHunterRiseVideo}>
        </Route>
        <Route exact path="/splithelper" component={SplitHelper}>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;