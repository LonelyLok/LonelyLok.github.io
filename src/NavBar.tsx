import React, { useState } from 'react';
import {
  Button,
  AppBar,
  Toolbar,
  Box,
  Tooltip,
  MenuList,
  MenuItem,
  Container,
  Paper,
  Popper,
} from '@mui/material';
import { Link } from 'react-router-dom';
import githubLogo from './assets/github-mark-white.png';
import LinkedInLogo from './assets/in-white.png';

function NavBar() {
  const [anchorElVideoGameRelatedPopper, setAnchorElVideoGameRelatedPopper] =
    useState<null | HTMLElement>(null);
  const [anchorElRandomPopper, setAnchorElRandomPopper] = useState<null | HTMLElement>(null);

  const videoGameRelatedItems = [
    {
      name: 'Video Archive',
      link: '/videogamefootagemenu',
    },
    {
      name: 'Slay the Spire 2 Record',
      link: '/slaythespire2earecords',
    },
  ];

  const randomThingsItems = [
    {
      name: 'Day of Life',
      link: '/dayoflifegame',
    },
    {
      name: 'About me test',
      link: '/aboutmetest',
    },
    {
      name: 'Amazon SDE2 Interview 2024 (No offer)',
      link: '/amazoninterview2024',
    },
    {
      name: 'My PC Spec',
      link: '/mypcspec',
    },
  ];

  const handleVideoGameRelatedPopperOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElVideoGameRelatedPopper(event.currentTarget);
  };

  const handleVideoGameRelatedPopperClose = () => {
    setAnchorElVideoGameRelatedPopper(null);
  };

  const handleRandomPopperOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElRandomPopper(event.currentTarget);
  };

  const handleRandomPopperClose = () => {
    setAnchorElRandomPopper(null);
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
          <Box
            onMouseLeave={handleVideoGameRelatedPopperClose}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Button
              color="inherit"
              onClick={handleVideoGameRelatedPopperOpen}
              onMouseEnter={handleVideoGameRelatedPopperOpen}
              sx={{ px: 1.25 }}
            >
              Video game related
            </Button>
            <Popper
              open={Boolean(anchorElVideoGameRelatedPopper)}
              anchorEl={anchorElVideoGameRelatedPopper}
              placement="bottom-start"
              sx={{ zIndex: 1300 }}
            >
              <Paper
                onMouseLeave={handleVideoGameRelatedPopperClose}
                sx={{
                  mt: 1,
                  minWidth: 220,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  overflow: 'hidden',
                }}
              >
                <MenuList autoFocusItem={false}>
                  {videoGameRelatedItems.map((item) => (
                    <MenuItem
                      key={item.link}
                      onClick={handleVideoGameRelatedPopperClose}
                      component={Link}
                      to={item.link}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </Paper>
            </Popper>
          </Box>
          <Box onMouseLeave={handleRandomPopperClose} sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              color="inherit"
              onClick={handleRandomPopperOpen}
              onMouseEnter={handleRandomPopperOpen}
              sx={{ px: 1.25 }}
            >
              Random things
            </Button>
            <Popper
              open={Boolean(anchorElRandomPopper)}
              anchorEl={anchorElRandomPopper}
              placement="bottom-start"
              sx={{ zIndex: 1300 }}
            >
              <Paper
                onMouseLeave={handleRandomPopperClose}
                sx={{
                  mt: 1,
                  minWidth: 220,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  overflow: 'hidden',
                }}
              >
                <MenuList autoFocusItem={false}>
                  {randomThingsItems.map((item) => (
                    <MenuItem
                      key={item.link}
                      onClick={handleRandomPopperClose}
                      component={Link}
                      to={item.link}
                    >
                      {item.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </Paper>
            </Popper>
          </Box>
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
