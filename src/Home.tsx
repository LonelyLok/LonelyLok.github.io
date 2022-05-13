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
                <Typography sx={{ fontSize: 12, fontFamily: 'Raleway' }} color="white" gutterBottom>
                  {s}
                </Typography>
              ))}
            </CardContent>
          </Card>
        )
      }
    
      const iconLabelMap = {
        'dot': <FiberManualRecordIcon style={{ fontSize: 'small', minWidth: '20px', color: 'white' }} />,
        'video': <OndemandVideoSharpIcon style={{ fontSize: 'small', minWidth: '20px', color: 'white' }} />
      }
      const gameList = ['Lost Ark', 'FINAL FANTASY XIV', 'MONSTER HUNTER WORLD (2630 hr)', 'Satisfactoy (241 hr)', 'Slay the Spire (431 hr)', 'Factorio (117 hr)', 'Dark Souls III (113 hr)', 'Nioh 2 (106 hr)', 'Risk of Rain 2 (129 hr)'];
      const pcSpec = ['MB: ASRock X570 Phantom Gaming 4', 'CPU: AMD Ryzen 5 3600', 'GPU: AMD 5700XT', 'CASE: NZXT H510', 'PSU: CORSAIR TX-M Series 550W', 'RAM: 32GB', 'SSD: 500GB', 'HDD: 1TB'];
      const typographyListBuilder = (l: Array<any>, iconLabel: any) => (
        <Typography>
          {l.map((s: any) => (<ListItem sx={{ fontFamily: 'Raleway', fontSize: 12 }} disablePadding><ListItemIcon style={{ minWidth: '10px' }}>{iconLabel}</ListItemIcon>{s}</ListItem>))}
        </Typography>
      );
      const videoPlayList = [<CustomizedModal title='Monster Hunter Rise PC Demo' video={(<iframe width="720" height="480" src="https://www.youtube.com/embed/EYW0qSlNZvg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)} />]
      const accordionList = [{ title: 'Video games that I play/played', summary: typographyListBuilder(gameList, iconLabelMap['dot']) },
      { title: 'Computer spec', summary: typographyListBuilder(pcSpec, iconLabelMap['dot']) },
      { title: 'Game record video', summary: typographyListBuilder(videoPlayList, iconLabelMap['video']) }]
    
      const codeProjectBuilder = ({ title, link }: { title: string; link: string }) => [
        <ListItem sx={{ fontFamily: 'Raleway', fontSize: 12 }} disablePadding><ListItemIcon style={{ minWidth: '10px' }}>{iconLabelMap['dot']}</ListItemIcon><Link sx={{ fontSize: '10px', color: 'white', 'textDecoration': 'underline' }} href={link}>{title}</Link></ListItem>
      ]
    return(
        <animated.div style={styles}>
            <p className='centered'>Hi, my name is Henry and welcome.</p>
            <div className="container">
              <Flip
                front={cardBuilder(['About Me'])}
                back={cardBuilder(['Name: Henry Yu', `Age: ${new Date().getFullYear() - 1996}`, 'Hobbies: Sleep, play video games', 'Personality: Arrogant, stubborn, dishonest'])}
              ></Flip>
              <Flip
                front={cardBuilder(['Work Related'])}
                back={cardBuilder(['Current job: Software Engineer', `Experience: ${new Date().getFullYear() - 2019} years`, 'Fields: Web, machine learning'])}
              ></Flip>
              <CustomizedAccordions data={accordionList} />
              <Flip
                front={cardBuilder(['Side project from github'])}
                back={cardBuilder([
                  codeProjectBuilder({ title: 'Check EVGA BStock for RTX GPU', link: 'https://github.com/LonelyLok/check-evga-b-stock' }),
                  codeProjectBuilder({ title: 'Twitch chat bot example', link: 'https://github.com/LonelyLok/twitch-chat-bot' }),
                  codeProjectBuilder({ title: 'Lost Ark Facet Simulator', link: '/lostarkfacetsim' })
                ])}
              ></Flip>
            </div>
          </animated.div>
    )
}

export default Home