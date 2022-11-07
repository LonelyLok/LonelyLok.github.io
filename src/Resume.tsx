import React, { useState } from 'react';
import profilePictures from './assets/profile.jpg';
import {
  List,
  Typography,
  ListItemIcon,
  ListItem,
  Container,
  Link,
  Avatar,
} from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from './AccordionHelper';

const Resume = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (e: any) => {
    setExpanded(true);
  };
  const workExpereinceSummary = [
    'Develop and maintance features for a NodeJS web application',
    'Build RESTful and GraphQL Api to serve data',
    'Designed and maintained data structures for MySQL database',
    'Write unit tests with test framework such as Mocha and Chai',
    'Experience integrating with third-party api',
    'Experience with AWS (Lambda, SQS, SNS, EC2)',
  ];
  return (
    <div>
      <Typography align='center' variant='h3'>
        Resume
      </Typography>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
        }}
      >
        <Avatar
          sx={{
            width: 128,
            height: 128,
          }}
          src={profilePictures}
        />
        <Typography sx={{pl: 1}}>Name: Hei Lok Yu</Typography>
      </Container>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
          p: 2,
        }}
      >
        <Typography align='justify' variant='h5'>
          <ApartmentIcon sx={{ pr: 1 }} />
          Work experience
          <Accordion sx={{ width: 700 }} onChange={handleChange}>
            <AccordionSummary>
              <Typography>Software engineer at Tourmo (2019 - Now)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense={true} sx={{ fontSize: 16 }}>
                {workExpereinceSummary.map((summary) => (
                  <ListItem>
                    <ListItemIcon>
                      <HorizontalRuleIcon sx={{ color: 'white' }} />
                    </ListItemIcon>
                    {summary}
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </Typography>
      </Container>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
        }}
      >
        <Typography align='justify' variant='h5'>
          <AccountTreeIcon sx={{ pr: 1 }} />
          Side projects
          <List dense={true} sx={{ fontSize: 16 }}>
            <ListItem>
              <ListItemIcon>
                <HorizontalRuleIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              Discord reminder bot{' '}
              <Link href='https://github.com/LonelyLok/discord-bot-reminder'>
                (Github Link)
              </Link>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HorizontalRuleIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              Personal website{' '}
              <Link href='https://github.com/LonelyLok/LonelyLok.github.io'>
                (Github Link)
              </Link>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HorizontalRuleIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              More in my github{' '}
              <Link href='https://github.com/LonelyLok'>(Github Link)</Link>
            </ListItem>
          </List>
        </Typography>
      </Container>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
          p: 2,
        }}
      >
        <Typography align='justify' variant='h5'>
          <SchoolIcon sx={{ pr: 1 }} />
          Education
          <Typography>
            University of California San Diego, La Jolla, CA, September 2016 -
            March 2018
          </Typography>
          <Typography>Bachelor of Science, Mathematics</Typography>
        </Typography>
      </Container>
      <Container
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
        }}
      >
        <Typography align='justify' variant='h5'>
          <ComputerIcon sx={{ pr: 1 }} />
          Tech Stack
          <Typography>
            Typescript, Javascript, NodeJS, Python, MYSQL, Docker, AWS, Redis,
            Github, Jira
          </Typography>
        </Typography>
      </Container>
    </div>
  );
};

export default Resume;
