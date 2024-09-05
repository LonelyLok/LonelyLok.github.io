import React from 'react';
import { Typography, Card, CardMedia, Link, Grid } from '@mui/material';

const VideoGameFootageMenu = () => {
  const games = [
    {
      id: 1,
      imgLink:
        'https://cdn2.steamgriddb.com/thumb/059c97dd02d3706cf2195a41c0028caf.jpg',
      releaseYear: 2021,
      name: 'Monster Hunter Rise',
      hrefLink: '#/monsterhunterrisevideo',
    },
    {
      id: 2,
      imgLink:
        'https://cdn2.steamgriddb.com/thumb/864598104d83374578ab53f3822d71f6.jpg',
      releaseYear: 2018,
      name: 'Monster Hunter World',
      hrefLink: '#/monsterhunterworldvideo',
    },
    {
      id: 3,
      imgLink:
        'https://cdn2.steamgriddb.com/thumb/311af4d2ca96f35eac76e62b8df57d16.jpg',
      releaseYear: 2024,
      name: 'No Rest For The Wicked',
      hrefLink: '#/norestforthewickedvideo',
    },
    {
        id: 4,
        imgLink:
          'https://cdn2.steamgriddb.com/thumb/9ac2641162c8716cdf59a40367e21b6e.jpg',
        releaseYear: 2024,
        name: 'Black Myth: Wukong',
        hrefLink: '#/blackmythwukongvideo',
      },
  ];
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
              <Link href={game.hrefLink} underline='none'>
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
