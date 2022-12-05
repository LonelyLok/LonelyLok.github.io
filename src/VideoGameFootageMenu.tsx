import React from 'react';
import './VideoGameFootageMenu.css';
import { Typography, Card, CardMedia, Link } from '@mui/material';

const VideoGameFootageMenu = () => {

    const games = [
        {
            id: 1,
            imgLink: 'https://image.api.playstation.com/vulcan/ap/rnd/202212/0205/DrHHLm1wEmIEfzlJj0csXqnm.jpg?w=620&thumb=false',
            releaseYear: 2021,
            name: 'Monster Hunter Rise'
        },
        {
            id: 2,
            imgLink: 'https://image.api.playstation.com/vulcan/img/cfn/11307RW7B5mvRMeOG-1pM9RnGdpRQVQ2iXinFe9755wHVXH0-mRqwizRWZQK8wMHat3XhtITgBGvRuT7JLJkkZenNxUerkoj.png?w=620&thumb=false',
            releaseYear: 2018,
            name: 'Monster Hunter World'
        }
    ]
    return (<div>
        <Typography align='center' variant='h4'>Video game footage archive (Click image)</Typography>
        <div className="container2">
            {games.sort((a, b) => b.releaseYear - a.releaseYear).map(game => (
                <Link href="#/wip">
                    <Card>
                    <CardMedia
                     component="img"
                     image={game.imgLink}>
                    </CardMedia>
                    </Card>
                </Link>
            ))}
        </div>
    </div>)
}

export default VideoGameFootageMenu