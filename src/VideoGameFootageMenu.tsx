import React from 'react';
import { Typography, Card, CardMedia, Link, Grid } from '@mui/material';
import { games } from './fakeDB'

const VideoGameFootageMenu = () => {
  
  return (
    <div>
      <Typography align='center' variant='h4' gutterBottom sx={{ mt: 1 }}>
        Video game footage archive (Click image)
      </Typography>
      <Grid container spacing={2} justifyContent='center'>
        {games
          .sort((a, b) => b.id - a.id)
          .map((game) => (
            <Grid item key={game.id}>
              <Link href={`#${game.hrefLink}`} underline='none'>
                <Card sx={{ height: 300, width: 200 }}>
                  <CardMedia component='img' image={game.imgLink} />
                </Card>
              </Link>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default VideoGameFootageMenu;
