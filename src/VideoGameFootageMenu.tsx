import React from 'react';
import { Typography, Card, CardMedia, Link, Grid, CardContent, Container, Box } from '@mui/material';
import { games } from './fakeDB';

const VideoGameFootageMenu = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Video Game Footage
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, color: 'text.secondary' }}>
          Archive of boss fights, builds, and random clips.
        </Typography>
      </Box>

      <Grid container spacing={2.5} justifyContent="center">
        {games
          .sort((a, b) => b.id - a.id)
          .map((game) => (
            <Grid item key={game.id} xs={12} sm={6} md={4} lg={3}>
              <Link href={`#${game.hrefLink}`} underline="none" color="inherit">
                <Card
                  sx={{
                    height: '100%',
                    transition: 'transform 0.2s ease, border-color 0.2s ease',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <Box
                    sx={{
                      aspectRatio: '2 / 3',
                      bgcolor: 'rgba(0,0,0,0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                  <CardMedia
                    component="img"
                    image={game.imgLink}
                    alt={game.name}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                  </Box>
                  <CardContent>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {game.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {game.releaseYear}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default VideoGameFootageMenu;
