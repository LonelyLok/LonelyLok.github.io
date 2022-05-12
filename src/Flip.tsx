import React, { useState } from 'react'
import { useSpring, a } from 'react-spring'

export default function Flip(props:any){
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })
    return ( 
    <div onClick={() => set(state => !state)}><a.div
        className='c'
        style={{ opacity: opacity.to(o => 1 - o), transform }}
      >
        {props.front}
      </a.div>
      <a.div
       className='c'
        style={{
          opacity,
          transform,
          rotateX: '180deg',
        }}
      >
       {props.back}
      </a.div>
    </div>
    );
}