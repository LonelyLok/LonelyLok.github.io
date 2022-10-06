import React, { useState } from 'react';
import {Radio, RadioGroup, FormControlLabel,FormControl, Typography, } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  backgroundColor: '#424242',
  color: 'white',
  width: 800,
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const AboutMeTest = () => {
  const typeIdMap = {
    1: 'RealLife',
  };

  const defaultSelected = {}

  const [expanded, setExpanded] = useState(false)

  const [selected, setSelected] = useState(defaultSelected)

  const handleClicked = (e:any) => {
    const [q,v] = e.target.value.split(':');
    setSelected({...selected, [q]:v});
  }

  const handleChange =(e: any) => {
      setExpanded(true);
    };

  const questionsAndAnswers = [
    {
      id: 1,
      typeId: 1,
      question: 'What month is Henry Birthday?',
      answer: {
        choices: [
          { id: 1, context: 'January' },
          { id: 2, context: 'April' },
          { id: 3, context: 'May' },
          { id: 4, context: 'august' },
          { id: 5, context: 'December' },
        ],
        answerId: 5,
      },
    },
    {
      id: 2,
      typeId: 1,
      question: 'What drink Henry consume the most daily?',
      answer: {
        choices: [
          { id: 1, context: 'Coke' },
          { id: 2, context: 'Water' },
          { id: 3, context: 'Green tea' },
          { id: 4, context: 'Orange juice' },
          { id: 5, context: 'Milk' },
        ],
        answerId: 3,
      },
    },
    {
      id: 3,
      typeId: 1,
      question: 'What is Henry favorite color?',
      answer: {
        choices: [
          { id: 1, context: 'Black' },
          { id: 2, context: 'White' },
          { id: 3, context: 'Red' },
          { id: 4, context: 'Purple' },
          { id: 5, context: 'Blue' },
        ],
        answerId: 1,
      },
    },
    {
      id: 4,
      typeId: 1,
      question: 'Which of the following number Henry like the most?',
      answer: {
        choices: [
          { id: 1, context: '0' },
          { id: 2, context: '145' },
          { id: 3, context: '1024' },
          { id: 4, context: '9' },
          { id: 5, context: '256' },
        ],
        answerId: 2,
        comment: '1! + 4! + 5! = 145'
      },
    },
    {
      id: 5,
      typeId: 1,
      question: 'Which of the following activities hate the most?',
      answer: {
        choices: [
          { id: 1, context: 'driving' },
          { id: 2, context: 'drinking' },
          { id: 3, context: 'singing' },
          { id: 4, context: 'running' },
          { id: 5, context: 'talking' },
        ],
        answerId: 1,
        comment: 'there are a lot of work in driving and I am very bad at it too'
      },
    },
  ];
  return (
    <div>
      <Typography align='center' variant='h4'>About Me Test</Typography>
      <Typography align='center' variant='h5'>Just some multiple choice questions about me.</Typography>
      <Accordion onChange={handleChange}>
        <AccordionSummary>
          <Typography>Real life related</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography>
        {questionsAndAnswers.map((obj) => {
          const { question, answer } = obj;
          const choices = answer.choices.map((c) => (
            <FormControlLabel
              control={<Radio />}
              label={c.context}
              value={`${obj.id}:${c.id}`}
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
        </AccordionDetails>
      </Accordion>
      {JSON.stringify(selected)}
    </div>
  );
};

export default AboutMeTest;
