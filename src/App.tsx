import React from 'react'
import { useSpring, animated } from 'react-spring'
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Flip from './Flip';
import CustomizedAccordions from './CustomizedAccordions';

function App() {
  const styles = useSpring({
    loop:false,
    from: {opacity: 0, color: '#333'},
    to: {opacity: 1, color: 'white'}
  })

  const cardBuilder = (l:Array<any>)=>{
    return (
      <Card sx={{ minWidth: 275, minHeight: 275, background: '#424242' }}>
      <CardContent>
        {l.map((s:any) => (
          <Typography sx={{ fontSize: 12, fontFamily:'Raleway' }} color="white" gutterBottom>
          {s}
        </Typography>
        ))}
      </CardContent>
    </Card>
    )
  }
  const accordionList = [{title: 'Some of the video games that I play/played', summary: ['FINAL FANTASY XIV','MONSTER HUNTER WORLD (2630 hr)','Satisfactoy (241 hr)', 'Slay the Spire (431 hr)', 'Factorio (117 hr)','Dark Souls III (113 hr)','Nioh 2 (106 hr)','Risk of Rain 2 (129 hr)']},
                          {title: 'Computer spec', summary:['work in progress']}]
  return (
    <animated.div  style={styles}>
      <p className='centered'>Hi, my name is Henry and welcome.</p>
      <div className="container">
        <Flip 
        front={cardBuilder(['About Me'])}
        back={cardBuilder(['Name: Henry Yu', `Age: ${new Date().getFullYear() - 1996}`, 'Hobbies: Sleep, play video games', 'Personality: Arrogant, stubborn, dishonest' ])}
        ></Flip>
        <Flip 
        front={cardBuilder(['Work Related'])}
        back={cardBuilder(['Current job: Software Engineer', `Experience: ${new Date().getFullYear()-2019} years`, 'Fields: Web, machine learning'])}
        ></Flip>
        <CustomizedAccordions data={accordionList}/>
        <Flip 
        front={cardBuilder(['Place Holder'])}
        back={cardBuilder(['Nothing here yet'])}
        ></Flip>
      </div>
    </animated.div>
  );
}

export default App;