import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline, GlobalStyles, Box } from '@mui/material';
import LostArkFacetSim from './LostArkFacetSim';
import Home from './Home';
import AboutMeTest from './AboutMeTest';
import Resume from './Resume';
import VideoGameFootageMenu from './VideoGameFootageMenu';
import WorkInProgress from './WorkInProgress';
import VideoBase from './VideoBase';
import { SplitHelper } from './SplitHelper';
import { DayOfLifeGame } from './dayOfLifeGame/DayOfLifeGame';
import NavBar from './NavBar';
import AboutMe from './AboutMe';
import AmazonInterview2024 from './random/AmazonInterview2024';
import MyPCSpec from './random/MyPCSpec';
import { games } from './fakeDB';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8ec5ff',
    },
    secondary: {
      main: '#d2e5ff',
    },
    background: {
      default: '#0b0f14',
      paper: '#101722',
    },
    text: {
      primary: '#edf3ff',
      secondary: '#9fb0c7',
    },
    divider: 'rgba(159,176,199,0.2)',
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Manrope", "Segoe UI", sans-serif',
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(159,176,199,0.14)',
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            background:
              'radial-gradient(circle at 20% -15%, rgba(142,197,255,0.16), transparent 45%), #0b0f14',
          },
          a: {
            color: 'inherit',
          },
        }}
      />
      <HashRouter>
        <Box sx={{ minHeight: '100vh' }}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/lostarkfacetsim" component={LostArkFacetSim}></Route>
            <Route exact path="/aboutmetest" component={AboutMeTest}></Route>
            <Route exact path="/resume" component={Resume}></Route>
            <Route
              exact
              path="/videogamefootagemenu"
              component={VideoGameFootageMenu}
            ></Route>
            <Route exact path="/wip" component={WorkInProgress}></Route>
            {games.map((game) => (
              <Route
                key={game.id}
                exact
                path={game.hrefLink}
                component={() => <VideoBase gameTitle={game.name} />}
              ></Route>
            ))}
            <Route exact path="/splithelper" component={SplitHelper}></Route>
            <Route exact path="/dayoflifegame" component={DayOfLifeGame}></Route>
            <Route exact path="/aboutme" component={AboutMe}></Route>
            <Route
              exact
              path="/amazoninterview2024"
              component={AmazonInterview2024}
            ></Route>
            <Route exact path="/mypcspec" component={MyPCSpec}></Route>
          </Switch>
        </Box>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
