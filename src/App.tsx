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
import { DayOfLifeGame } from './dayOfLifeGame/DayOfLifeGame';
import NavBar from './NavBar'
import AboutMe from './AboutMe';
import AmazonInterview2024 from './random/AmazonInterview2024';
import MyPCSpec from './random/MyPCSpec';
import { games } from './fakeDB'

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
         {games.map((game) => (
          <Route key={game.id} exact path={game.hrefLink} component={() => <VideoBase gameTitle={game.name} />}>
          </Route>
        ))}
        <Route exact path="/splithelper" component={SplitHelper}>
        </Route>
        <Route exact path="/dayoflifegame" component={DayOfLifeGame}>
        </Route>
        <Route exact path="/aboutme" component={AboutMe}>
        </Route>
        <Route exact path="/amazoninterview2024" component={AmazonInterview2024}>
        </Route>
        <Route exact path="/mypcspec" component={MyPCSpec}>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;