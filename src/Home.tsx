import React from 'react';
import { useSpring, animated } from 'react-spring';
import profilePictures from './assets/profile.jpg';
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Flip from './Flip';
import {
  List,
  ListItem,
  ListItemIcon,
  Avatar,
  Typography,
  Link,
  Box,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';

const globalFontType = 'Arial';

const Home = () => {
  const styles = useSpring({
    loop: false,
    from: { opacity: 0, color: '#333' },
    to: { opacity: 1, color: 'white' },
  });

  const cardBuilder = (l: Array<any>) => {
    return (
      <Card sx={{ minWidth: 275, minHeight: 275, background: '#424242' }}>
        <CardContent>
          {l.map((s: any) => (
            <Typography
              sx={{ fontSize: 14, fontFamily: { globalFontType } }}
              color='white'
              gutterBottom
            >
              {s}
            </Typography>
          ))}
        </CardContent>
        <CardContent sx={{ position: 'absolute', bottom: 0, right: 0 }}>
          <Typography
            sx={{ fontSize: 9, fontFamily: { globalFontType } }}
            color='white'
            gutterBottom
          >
            Click to Filp
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const iconLabelMap = {
    dot: (
      <FiberManualRecordIcon
        style={{ fontSize: 'small', minWidth: '20px', color: 'white' }}
      />
    ),
    video: (
      <OndemandVideoSharpIcon
        style={{ fontSize: 'small', minWidth: '20px', color: 'white' }}
      />
    ),
  };

  const codeProjectBuilder = ({
    title,
    link,
  }: {
    title: string;
    link: string;
  }) => [
    <ListItem sx={{ fontFamily: { globalFontType }, fontSize: 12, pl: 0 }}>
      <ListItemIcon style={{ minWidth: '10px' }}>
        {iconLabelMap['dot']}
      </ListItemIcon>
      <Link
        sx={{ fontSize: '10px', color: 'white', textDecoration: 'underline' }}
        href={link}
      >
        {title}
      </Link>
    </ListItem>,
  ];

  return (
    <animated.div style={styles}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant='h4'>
          Hi, my name is Henry. Hope you have a good day.
        </Typography>
        <Avatar
          sx={{ ml: 2, height: 128, width: 128 }} // Add margin-left to create space between title and avatar
          src={profilePictures}
          alt="Henry's Profile Picture"
        />
      </Box>
      <div className='container'>
        <Flip
          front={cardBuilder(['About Me'])}
          back={cardBuilder([
            'Name: Henry Yu',
            `Age: ${new Date().getFullYear() - 1996}`,
            'Hobbies: Sleep, play video games',
            'Favorite food: Rice',
            'Favorite drink: Green tea',
            <Link
              sx={{ color: 'white', textDecoration: 'underline' }}
              href='#/aboutmetest'
            >
              And More
            </Link>,
          ])}
        ></Flip>
        <Flip
          front={cardBuilder(['Work Related'])}
          back={cardBuilder([
            'Current job: Software Engineer',
            `Experience: ${new Date().getFullYear() - 2019} years`,
            'Fields: Web, machine learning',
            'Tech stack: Typescript, NodeJS, MySQL, AWS, Docker, Python',
            <Link
              sx={{ color: 'white', textDecoration: 'underline' }}
              href='#/resume'
            >
              Resume
            </Link>,
          ])}
        ></Flip>
        <List>
          <ListItem>
            <ListItemIcon style={{ minWidth: '10px' }}>
              {iconLabelMap['dot']}
            </ListItemIcon>
            <Typography>
              <Link href='#/dayoflifegame'>My day of life</Link>
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon style={{ minWidth: '10px' }}>
              {iconLabelMap['dot']}
            </ListItemIcon>
            <Typography>
              <Link href='#/videogamefootagemenu'>
                Video game footage archive
              </Link>
            </Typography>
          </ListItem>
        </List>
        <Flip
          front={cardBuilder(['Side projects'])}
          back={cardBuilder([
            codeProjectBuilder({
              title: 'job helper',
              link: 'https://github.com/LonelyLok/job-helper',
            }),
            codeProjectBuilder({
              title: 'Split helper',
              link: '#/splithelper',
            }),
            codeProjectBuilder({
              title: 'Twitch chat bot example',
              link: 'https://github.com/LonelyLok/twitch-chat-bot',
            }),
            codeProjectBuilder({
              title: 'This webpage',
              link: 'https://github.com/LonelyLok/LonelyLok.github.io',
            }),
          ])}
        ></Flip>
      </div>
    </animated.div>
  );
};

export default Home;
