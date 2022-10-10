import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Accordion, AccordionSummary, AccordionDetails} from './AccordionHelper';


export default function CustomizedAccordions(props:any) {
  const {data} = props || {}
  return (
    <div>
      {(data || []).map((obj:Record<string,any>)=>(
      <Accordion sx={{width: 275}}>
        <AccordionSummary>
          <Typography sx={{ fontFamily:'Verdana', fontSize: 12 }}>{obj.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {obj.summary}
        </AccordionDetails>
      </Accordion>
      ))}
    </div>
  );
}