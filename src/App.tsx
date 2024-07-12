import React from 'react'
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import LostArkFacetSim from './LostArkFacetSim';
import Home from './Home';
import AboutMeTest from './AboutMeTest';
import Resume from './Resume';
import VideoGameFootageMenu from './VideoGameFootageMenu';
import WorkInProgress from './WorkInProgress';
import VideoBase from './VideoBase';
import { SplitHelper } from './SplitHelper'
import { DayOfLifeGame } from './DayOfLifeGame';
import NavBar from './NarBar'
import AboutMe from './AboutMe';
import AmazonInterview2024 from './random/AmazonInterview2024';

function App() {
  return (
    <HashRouter>
      <NavBar />
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
        <Route exact path="/monsterhunterworldvideo" component={() => <VideoBase gameTitle={"Monster Hunter World"}/>}>
        </Route>
        <Route exact path="/monsterhunterrisevideo" component={() => <VideoBase gameTitle={"Monster Hunter Rise"}/>}>
        </Route>
        <Route exact path="/norestforthewickedvideo" component={() => <VideoBase gameTitle={"No Rest For The Wicked"}/>}>
        </Route>
        <Route exact path="/splithelper" component={SplitHelper}>
        </Route>
        <Route exact path="/dayoflifegame" component={DayOfLifeGame}>
        </Route>
        <Route exact path="/aboutme" component={AboutMe}>
        </Route>
        <Route exact path="/amazoninterview2024" component={AmazonInterview2024}>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;