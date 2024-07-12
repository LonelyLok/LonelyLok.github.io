import { Container, Box, Typography,Link, List, ListItem   } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@mui/lab';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

const data = [
  {
    time: '2024/05/28',
    content:
      'An amazon recruiter reached out to me on LinkedIn and provide a link to schedule a phone call.',
  },
  {
    time: '2024/05/30',
    content:
      'Talk to the recruiter on the phone. Basic questions about my background and experience. After the call, the recruiter sent me a coding challenge from hackerrank.',
  },
  {
    time: '2024/06/03',
    content:
      'I completed the coding challenge and also let recuriter know I completed it. There was two questions and it was like leetcode medium level. There also scenario questions like given a project, which items should be prioritized and why.',
  },
  {
    time: '2024/06/05',
    content:
      'Recruiter reached out to me and said want to schedule a phone call to talk about next steps on the next day.',
  },
  {
    time: '2024/06/06',
    content:
      'Talk to the recuriter on the phone and the recruiter said I passed the coding challenge and want to schedule a virtual onsite interview. Due to the location I was looking for, the next interview around is in late July. The recuiter mention that if I have other final round interview, then they can move me to a earlier spot. We also scheduled two more interview in between to go over other things.',
  },
  {
    time: '2024/06/10',
    content: 'I informed the recruiter that I have another final round interview scheduled on the next day (The company is called FloQast and spoiler alert, I did not get the offer from them either).',
  },
  {
    time: '2024/06/11',
    content: 'Recruiter reached out to me and said they can move me to an earlier spot for the virtual onsite interview. We scheduled the virtual onsite interview on 2024/06/20 and 2024/06/21.',
  },
  {
    time: '2024/06/12',
    content: 'Another phone call with the recruiter to go over the virtual onsite interview process and what to expect. I was told there going to be 4 rounds with an hour each and each of them is half behavioral and half technical.',
  },
  {
    time: '2024/06/14',
    content: 'Another phone call with the recruiter to go over the Amazon Leadership Principles.',
  },
  {
    time: '2024/06/20',
    content: 'First round of the virtual onsite interview. Two LP questions and a leetcode medium level question.',
  },
  {
    time: '2024/06/21',
    content: 'Second, third and fourth round of the virtual onsite interview. Two LP questions and a system design. Two LP questions and a leetcode medium level question. Two LP questions and a low level design question.',
  },
  {
    time: '2024/06/28',
    content: 'Recruiter reached out to me and said the team has decided not to move forward with an offer for L5 (SDE2) at this time. But they are willing consider me as SDE1 and the interview result is valid for 12 months. I scheduled another phone call with the recruiter to talk about the next steps.',
  },
  {
    time: '2024/07/03',
    content: 'Phone call with recruiter. The recuriter told me that their team do not have a openning for SDE1 and in general Amazon do not have a lot of SDE1 position. We did a quick look together and only found 1 at the location I want. The recruiter said they will reach out to that team and see if they can consider me for that position. The recruiter also said keep eyes on any sde1 job post and let them know if I see any. In my mind, I already give up. It is jover.',
  },
  {
    time: '2024/07/04-Now',
    content: 'I have been checking the job post everyday and send recruiter new sde 1 jobs and it is just depend on if the recuituer saw my email and decide if they have time to help me connect to a different team. However, I would say the responsiveness has decrease a lot.'
  }
];

const AmazonInterview2024 = () => {
  return (
    <Container>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        minHeight='100vh'
      >
        <Typography variant='h3' component='h3' gutterBottom>
          Amazon SDE 2 Interview 2024 Experience (No offer)
        </Typography>
        <Typography variant='h5' component='h5' gutterBottom>!! Warning broken english coming up !!</Typography>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='flex-start'
          width='100%'
          paddingLeft={2}
        >
          <Timeline  sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}>
            {data.map((item, index) => {
              return (
                <TimelineItem key={index}>
                  <TimelineOppositeContent color='white'>
                    {item.time}
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>{item.content}</TimelineContent>
                </TimelineItem>
              )
            })}
          </Timeline>
        </Box>
        <Box>
          <Typography variant='h5' component='h5' gutterBottom>
            Final Thoughts: 
            </Typography>
            <Typography variant='body1' gutterBottom>
            For perparing technical, I started around 2024/06/11. 
            <List >
              <ListItem >For coding, I bought leetcode premium and did like 100 medium questions and some random easy questions when I need a break. Most of them have amazon tag on it but I don't think that help too much. 
              I think if you do like blind 75 or like neetcode you probably will be fine. </ListItem>
              <ListItem >For system design, I watched youtube videos. The two channels I used the most are&nbsp;{<Link href="https://www.youtube.com/@jordanhasnolife5163/videos">Jordan has no life</Link>}&nbsp;and&nbsp;{<Link href="https://www.youtube.com/@hello_interview/videos"> Hello Interview - Tech Interview Preparation</Link>}.</ListItem>
              <ListItem >For low level design, I only spent 1 day on this because I didn't know low level design is a thing until the last day. I didn't read the document from the recuiter until the last day so it was a oversight by me. I looked up what other people suggest and people suggest Grokking the Low Level Design Interview Using OOD Principles. 
                I don't want to pay because I only have 1 day left so I just copy and paste the question on their website and ask chatgpt to give me the answer so I can study.</ListItem>
            </List>
            For perparing behavioral, I started 1 day before the interview.
            <List>
              <ListItem>
                I perpare total like 20 stories because I was told I should not reuse any story even though if it fit mutiple Leadership Principles questions.
              </ListItem>
            </List>
            </Typography>
            <Typography variant='body1' gutterBottom>
              I was sad and disappointed when I got the news. This is probably the closest opportunity I encounter in my life to work at FAANG company and I failed. It felt extra bad when I tried my best.
            </Typography>
            <Typography variant='body1' gutterBottom>I also built 2 thing through out this entire experince
              <List>
                <ListItem>
                  <Typography variant='body1' gutterBottom>
                  1. chrome extension that can show dislike number on a leetcode question. I want to see like vs dislike when I doing a problem. Leetcode hide them on display but it is available on the api.    <Link href="https://github.com/LonelyLok/project-pain">Github Link</Link>
                  </Typography>
                </ListItem>
                <ListItem>
                 <Typography variant='body1' gutterBottom>
                 2. webapp that show amazon sde 1 job. I was told that only less than 1 year experience is consider sde 1. The reason I built this is because sometimes the filter is not working on this <Link href="https://www.amazon.jobs/en/search?offset=0&result_limit=10&sort=relevant&category%5B%5D=software-development&country%5B%5D=USA&distanceType=Mi&radius=24km&industry_experience=less_than_1_year&latitude=&longitude=&loc_group_id=&loc_query=&base_query=&city=&country=&region=&county=&query_options=&"> site</Link>.    <Link href="https://github.com/LonelyLok/project-pain">Github Link</Link>
                 </Typography>
                </ListItem>
              </List>
            </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AmazonInterview2024;
