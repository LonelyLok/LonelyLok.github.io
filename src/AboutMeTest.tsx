import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormControl, Typography } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from './AccordionHelper';
import { Container, Button } from '@mui/material';
import dataSet from './dataSet.json';

const AboutMeTest = () => {
  const typeList = [
    {
      id: 1,
      title: 'Me related'
    },
    {
      id: 2,
      title: 'Career related'
    },
  ]

  type Question = {
    id: number;
    typeId: number;
    question: string;
    answer: {
      choices: Array<{id: number ; context: string}>;
      answerId: number;
      comment?: string;
    }
  }

  const questionsAndAnswers: Array<Question> = (dataSet as any).questionsAndAnswers;

  const typeToQandAMap = questionsAndAnswers.reduce((acc, curr) => {
    const key = curr.typeId
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(curr);
    return acc
  }, {} as Record<number, Array<Question>>)

  const defaultSelected = {}
  const defaultScores = {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [expanded, setExpanded] = useState(false)

  const [selected, setSelected]:[any,any] = useState(defaultSelected)

  const [scores, setScores]:[any, any] = useState(defaultScores)

  const handleClicked = (e: any) => {
    const [typeId, qId, sId] = e.target.value.split(':');
    const sub = selected[typeId] || {}
    const sub2 = {...sub, [qId]: sId}
    setSelected({ ...selected, [typeId]: sub2 });
  }

  const handleChange = (e: any) => {
    setExpanded(true);
  };

  const calculateScore = (e: any) => {
    const typeId = e.target.value
    const arr = typeToQandAMap[typeId] || [];
    const answers = arr.reduce((acc:any,curr:any)=>{
      acc[curr.id] = curr.answer.answerId
      return acc;
    },{})
    const selectedAnswer = selected[typeId] || {}
    let score = 0
    Object.entries(selectedAnswer).forEach(([qId,aId])=>{
      if(answers[qId] === Number(aId)){
        score += 1
      }
    })
    setScores({...scores, [typeId]: score})
  }

  return (
    <div>
      <Typography align='center' variant='h4'>About Me Test</Typography>
      <Typography align='center' variant='h5'>Just some multiple choice questions about me.</Typography>
      {
          typeList.map(({id, title})=>{
            return(
              <Container sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Accordion sx={{ width: 800 }} onChange={handleChange}>
                  <AccordionSummary>
                    <Typography>{title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      {(typeToQandAMap[id] || []).map((obj:any) => {
                        const { question, answer } = obj;
                        const choices = answer.choices.map((c:any) => (
                          <FormControlLabel
                            control={<Radio />}
                            label={c.context}
                            value={`${id}:${obj.id}:${c.id}`}
                          />
                        ));
                        return (
                          <div>
                            <FormControl>
                              <Typography align='justify'>{question}</Typography>
                              <RadioGroup row onChange={handleClicked}>{choices}</RadioGroup>
                            </FormControl>
                          </div>
                        );
                      })}
                    </Typography>
                    <Typography>
                      <Button variant="contained" value={id} onClick={calculateScore}>check</Button>
                    </Typography>
                    <Typography sx={{display: scores[id] === undefined ? 'none' : ''}}>
                        You got {scores[id]} out of {(typeToQandAMap[id] || []).length} corrected
                      </Typography>
                  </AccordionDetails>
                </Accordion>
              </Container>
            )
          })
        }
    </div>
  );
};

export default AboutMeTest;
