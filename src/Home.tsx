import React from 'react'
import { useSpring, animated } from 'react-spring'
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Flip from './Flip';
import CustomizedAccordions from './CustomizedAccordions';
import Typography from '@mui/material/Typography';
import { ListItem, ListItemIcon } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import CustomizedModal from './CustomizedModal';
import Link from '@mui/material/Link';

const globalFontType = 'Arial';

const Home = () => {
  const styles = useSpring({
    loop: false,
    from: { opacity: 0, color: '#333' },
    to: { opacity: 1, color: 'white' }
  })

  const cardBuilder = (l: Array<any>) => {
    return (
      <Card sx={{ minWidth: 275, minHeight: 275, background: '#424242' }}>
        <CardContent>
          {l.map((s: any) => (
            <Typography sx={{ fontSize: 14, fontFamily: {globalFontType} }} color="white" gutterBottom>
              {s}
            </Typography>
          ))}
        </CardContent>
        <CardContent sx={{position: 'absolute', bottom: 0, right: 0}}><Typography sx={{ fontSize: 9, fontFamily: {globalFontType} }} color="white" gutterBottom>
             Click to Filp
            </Typography></CardContent>
      </Card>
    )
  }

  const iconLabelMap = {
    'dot': <FiberManualRecordIcon style={{ fontSize: 'small', minWidth: '20px', color: 'white' }} />,
    'video': <OndemandVideoSharpIcon style={{ fontSize: 'small', minWidth: '20px', color: 'white' }} />
  }
  const gameGenres = ['Action RPG', 'Soulslike'];
  const pcSpec = ['MB: ASRock X570 Phantom Gaming 4', 'CPU: AMD Ryzen 5 3600', 'GPU: AMD 5700XT', 'CASE: NZXT H510', 'PSU: CORSAIR TX-M Series 550W', 'RAM: 32GB', 'SSD: 500GB', 'HDD: 1TB'];
  const typographyListBuilder = (l: Array<any>, iconLabel: any) => (
    <Typography>
      {l.map((s: any) => (<ListItem sx={{ fontFamily: {globalFontType}, fontSize: 12 }} disablePadding><ListItemIcon style={{ minWidth: '10px' }}>{iconLabel}</ListItemIcon>{s}</ListItem>))}
    </Typography>
  );
  const [videoWidth, videoHeight] = [1280, 720]
  const videoPlayList = [
    <CustomizedModal title='Lost Ark 1385ilv SH Velganos' video={(<iframe width={videoWidth} height={videoHeight} src="https://www.youtube.com/embed/Gud1JaBKnkQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)} />,
    <CustomizedModal title='Monster Hunter Rise PC Demo' video={(<iframe width={videoWidth} height={videoHeight} src="https://www.youtube.com/embed/EYW0qSlNZvg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)} />
  ]
  const accordionList = [{ title: 'Favorite video game genre', summary: typographyListBuilder(gameGenres, iconLabelMap['dot']) },
  { title: 'Computer spec', summary: typographyListBuilder(pcSpec, iconLabelMap['dot']) },
  { title: 'Game record video', summary: typographyListBuilder(videoPlayList, iconLabelMap['video']) }]

  const codeProjectBuilder = ({ title, link }: { title: string; link: string }) => [
    <ListItem sx={{ fontFamily: {globalFontType}, fontSize: 12, pl: 0 }} >
      <ListItemIcon style={{ minWidth: '10px' }}>{iconLabelMap['dot']}</ListItemIcon>
      <Link sx={{ fontSize: '10px', color: 'white', 'textDecoration': 'underline' }} href={link}>{title}</Link>
    </ListItem>
  ]

  return (
    <animated.div style={styles}>
      <p className='centered'>Hi, my name is Henry and welcome.</p>
      <div className="container">
        <Flip
          front={cardBuilder(['About Me'])}
          back={cardBuilder(['Name: Henry Yu', `Age: ${new Date().getFullYear() - 1996}`, 'Hobbies: Sleep, play video games', 'Favorite food: Rice', 'Favorite drink: Green tea'])}
        ></Flip>
        <Flip
          front={cardBuilder(['Work Related'])}
          back={cardBuilder(['Current job: Software Engineer', `Experience: ${new Date().getFullYear() - 2019} years`, 'Fields: Web, machine learning', 'Tech stack: Typescript, NodeJS, MySQL, AWS, Docker, Python',])}
        ></Flip>
        <CustomizedAccordions data={accordionList} />
        <Flip
          front={cardBuilder(['Side projects'])}
          back={cardBuilder([
            codeProjectBuilder({ title: 'Check EVGA BStock for RTX GPU', link: 'https://github.com/LonelyLok/check-evga-b-stock' }),
            codeProjectBuilder({ title: 'Twitch chat bot example', link: 'https://github.com/LonelyLok/twitch-chat-bot' }),
            codeProjectBuilder({ title: 'Lost Ark Facet Simulator', link: '#/lostarkfacetsim' }),
            codeProjectBuilder({ title: 'This webpage', link: 'https://github.com/LonelyLok/LonelyLok.github.io' }),
          ])}
        ></Flip>
      </div>
    </animated.div>
  )

}

export default Home