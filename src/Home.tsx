import React from 'react';
import './App.css';
import { Typography, Link, Box, Container } from '@mui/material';

const globalFontType = 'Arial';

const Home = () => {
  return (
    <Container>
      <Typography variant='h2' component='h2' gutterBottom>
        Welcome
      </Typography>
      <Typography variant='h4' component='h4' gutterBottom>
        This is a personal website of Henry
      </Typography>
    </Container>
  );
};

export default Home;
