import React, { useState } from 'react';
import {
  Button,
  AppBar,
  Toolbar,
  Box,
  Tooltip,
  Menu,
  MenuItem,
  Container,
} from '@mui/material';
import { Link } from 'react-router-dom';
import githubLogo from './assets/github-mark-white.png';
import LinkedInLogo from './assets/in-white.png';

function NavBar() {
  const [anchorElMiniGames, setAnchorElMiniGames] = useState<null | HTMLElement>(null);
  const [anchorElRandom, setAnchorElRandom] = useState<null | HTMLElement>(null);

  const handleMiniGamesMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMiniGames(event.currentTarget);
  };

  const handleMiniGamesMenuClose = () => {
    setAnchorElMiniGames(null);
  };

  const handleRandomMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElRandom(event.currentTarget);
  };

  const handleRandomMenuClose = () => {
    setAnchorElRandom(null);
  };

  const CustomMenu = ({
    menuCloseFunc,
    anchor,
    data,
  }: {
    menuCloseFunc: () => void;
    anchor: HTMLElement | null;
    data: { name: string; link: string }[];
  }) => {
    return (
      <Menu
        id="site-menu"
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={menuCloseFunc}
        keepMounted
        PaperProps={{
          sx: {
            mt: 1,
            bgcolor: 'background.paper',
            border: '1px solid',
            borderColor: 'divider',
            minWidth: 220,
          },
        }}
      >
        {data.map((item) => {
          return (
            <MenuItem key={item.link} onClick={menuCloseFunc} component={Link} to={item.link}>
              {item.name}
            </MenuItem>
          );
        })}
      </Menu>
    );
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'rgba(11, 15, 20, 0.82)',
        borderBottom: '1px solid',
        borderColor: 'divider',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 0.5, gap: 0.5, flexWrap: 'wrap' }}>
          <Button color="inherit" component={Link} to="/" sx={{ px: 1.25 }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/aboutme" sx={{ px: 1.25 }}>
            About Me
          </Button>
          <Button color="inherit" onClick={handleMiniGamesMenuClick} sx={{ px: 1.25 }}>
            Mini games
          </Button>
          <CustomMenu
            menuCloseFunc={handleMiniGamesMenuClose}
            anchor={anchorElMiniGames}
            data={[
              {
                name: 'Day of Life',
                link: '/dayoflifegame',
              },
              {
                name: 'About me test',
                link: '/aboutmetest',
              },
            ]}
          />
          <Button color="inherit" component={Link} to="/videogamefootagemenu" sx={{ px: 1.25 }}>
            Video Archive
          </Button>
          <Button color="inherit" onClick={handleRandomMenuClick} sx={{ px: 1.25 }}>
            Random things
          </Button>
          <CustomMenu
            menuCloseFunc={handleRandomMenuClose}
            anchor={anchorElRandom}
            data={[
              {
                name: 'Amazon SDE2 Interview 2024 (No offer)',
                link: '/amazoninterview2024',
              },
              {
                name: 'My PC Spec',
                link: '/mypcspec',
              },
            ]}
          />
          <Box sx={{ flexGrow: 1 }}></Box>
          <Tooltip title="My LinkedIn">
            <Button
              color="inherit"
              href="https://www.linkedin.com/in/hei-lok-yu-083440156/"
              target="_blank"
              rel="noreferrer"
              sx={{ minWidth: 40, px: 0.5 }}
            >
              <img style={{ width: 20, height: 20 }} src={LinkedInLogo} alt="LinkedIn" />
            </Button>
          </Tooltip>
          <Tooltip title="My Github">
            <Button
              color="inherit"
              href="https://github.com/LonelyLok/"
              target="_blank"
              rel="noreferrer"
              sx={{ minWidth: 40, px: 0.5 }}
            >
              <img style={{ width: 20, height: 20 }} src={githubLogo} alt="github" />
            </Button>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
