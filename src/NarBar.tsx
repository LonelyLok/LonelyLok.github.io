import React, { useState } from 'react';
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tooltip,
  Menu,
  MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import githubLogo from './assets/github-mark-white.png';
import LinkedInLogo from './assets/in-white.png';

function NavBar() {
  const [anchorElMiniGames, setAnchorElMiniGames] = useState(null);

  const handleMiniGamesMenuClick = (event: any) => {
    setAnchorElMiniGames(event.currentTarget);
  };

  const handleMiniGamesMenuClose = () => {
    setAnchorElMiniGames(null);
  };

  const CustomMenu = ({
    menuCloseFunc,
    anchor,
  }: {
    menuCloseFunc: any;
    anchor: any;
  }) => {
    const data = [
      {
        name: 'Day of Life',
        link: '/dayoflifegame',
      },
      {
        name: 'About me test',
        link: '/aboutmetest',
      },
    ];

    return (
      <Menu
        id='simple-menu'
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={menuCloseFunc}
        keepMounted
      >
        {data.map((item) => {
          return (
            <MenuItem onClick={menuCloseFunc} component={Link} to={item.link}>
              {item.name}
            </MenuItem>
          );
        })}
      </Menu>
    );
  };
  return (
    <AppBar position='static' sx={{ bgcolor: 'black' }}>
      <Toolbar>
        <Box>
          <Button color='inherit' component={Link} to='/' sx={{ mx: 1 }}>
            Home
          </Button>
        </Box>
        <Box>
          <Button color='inherit' component={Link} to='/aboutme' sx={{ mx: 1 }}>
            About Me
          </Button>
        </Box>
        <Box>
          <Button
            color='inherit'
            onClick={handleMiniGamesMenuClick}
            sx={{ mx: 1 }}
          >
            Mini games
          </Button>
          <CustomMenu
            menuCloseFunc={handleMiniGamesMenuClose}
            anchor={anchorElMiniGames}
          />
        </Box>
        <Box>
          <Button
            color='inherit'
            component={Link}
            to='/videogamefootagemenu'
            sx={{ mx: 1 }}
          >
            Video Archive
          </Button>
        </Box>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box>
          <Tooltip title='My LinkedIn'>
            <Button color='inherit' href='https://www.linkedin.com/in/hei-lok-yu-083440156/'>
              <img
                style={{ width: 24, height: 24 }}
                src={LinkedInLogo}
                alt='LinkedIn'
              />
            </Button>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip title='My Github'>
            <Button color='inherit' href='https://github.com/LonelyLok/'>
              <img
                style={{ width: 24, height: 24 }}
                src={githubLogo}
                alt='github'
              />
            </Button>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
