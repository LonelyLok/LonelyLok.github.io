import React from 'react'
import { useSpring, animated } from 'react-spring'
import './App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Flip from './Flip'

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
          <Typography sx={{ fontSize: 14, fontFamily:'Raleway' }} color="white" gutterBottom>
          {s}
        </Typography>
        ))}
      </CardContent>
    </Card>
    )
  }
  return (
    <animated.div  style={styles}>
      <p className='centered'>Hi, my name is Henry and welcome.</p>
      <div className="container">
        <Flip 
        front={cardBuilder(['About Me'])}
        back={cardBuilder(['Name: Henry Yu', `Age: ${new Date().getFullYear() - 1996}`, 'Hobbies: Sleep, play video games'])}
        ></Flip>
        <Flip 
        front={cardBuilder(['Work Related'])}
        back={cardBuilder(['Current job: Software Engineer', `Experience: ${new Date().getFullYear()-2019} years`, 'Fields: Web, machine learning'])}
        ></Flip>
      </div>
    </animated.div>
  );
}

export default App;