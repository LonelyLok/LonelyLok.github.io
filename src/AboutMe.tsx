import React from 'react';
import { Container, Box, Typography, Avatar } from '@mui/material';
import profilePictures from './assets/profile.jpg';

const AboutMe = () => {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h2" component="h2" gutterBottom>
          About Me
        </Typography>
        <Avatar
          sx={{ height: 128, width: 128, mb: 2 }} // Add margin-left to create space between title and avatar
          src={profilePictures}
          alt="Henry's Profile Picture"
        />
        <Typography variant="body1">
          Name: Henry Yu
        </Typography>
        <Typography variant="body1">
          Age: {new Date().getFullYear() - 1996}
        </Typography>
        <Typography variant="body1">
         Hobbies: Sleep, play video games
        </Typography>
        <Typography variant="body1">
            Current job: Software Engineer
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutMe;