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
      'An Amazon recruiter reached out to me on LinkedIn and shared a link to schedule a phone call.',
  },
  {
    time: '2024/05/30',
    content:
      'I spoke with the recruiter on the phone. They asked basic questions about my background and experience. After the call, I received a HackerRank coding challenge.',
  },
  {
    time: '2024/06/03',
    content:
      'I completed the coding challenge and let the recruiter know. There were two LeetCode-medium level questions, plus scenario questions about project prioritization and reasoning.',
  },
  {
    time: '2024/06/05',
    content:
      'The recruiter reached out and asked to schedule a phone call the next day to discuss next steps.',
  },
  {
    time: '2024/06/06',
    content:
      'I spoke with the recruiter and learned I passed the coding challenge. They wanted to schedule a virtual onsite interview. Because of the location I was targeting, the next available slot was in late July. The recruiter said they could move me earlier if I had other final-round interviews. We also scheduled two additional calls to go over prep details.',
  },
  {
    time: '2024/06/10',
    content: 'I informed the recruiter that I had another final-round interview the next day (FloQast, and I did not get that offer either).',
  },
  {
    time: '2024/06/11',
    content: 'The recruiter reached out and said they could move me to an earlier virtual onsite slot. We scheduled it for 2024/06/20 and 2024/06/21.',
  },
  {
    time: '2024/06/12',
    content: 'Another phone call with the recruiter to go over the virtual onsite process and expectations. I was told there would be four one-hour rounds, each split between behavioral and technical questions.',
  },
  {
    time: '2024/06/14',
    content: 'Another phone call with the recruiter to go over the Amazon Leadership Principles.',
  },
  {
    time: '2024/06/20',
    content: 'First round of the virtual onsite interview: two LP questions and one LeetCode-medium question.',
  },
  {
    time: '2024/06/21',
    content: 'Second, third, and fourth rounds of the virtual onsite interview: two LP questions + system design, two LP questions + one LeetCode-medium question, and two LP questions + one low-level design question.',
  },
  {
    time: '2024/06/28',
    content: 'The recruiter told me the team decided not to move forward with an L5 (SDE2) offer at that time. They were willing to consider me for SDE1, and the interview result would remain valid for 12 months. I scheduled another call to discuss next steps.',
  },
  {
    time: '2024/07/03',
    content: 'Phone call with the recruiter. They told me their team did not have an SDE1 opening, and in general Amazon had very few SDE1 positions. We quickly checked and found only one in my target location. The recruiter said they would reach out to that team, and asked me to keep an eye on SDE1 postings and share anything I found. At that point, I felt like it was over.',
  },
  {
    time: '2024/07/04-Now',
    content: 'I have been checking job posts every day and sending SDE1 openings to the recruiter. At this point it mostly depends on whether the recruiter sees my email and has time to help me connect with a different team. Response times have dropped a lot.'
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
            I started technical prep around 2024/06/11. 
            <List >
              <ListItem >For coding, I bought LeetCode Premium and did about 100 medium questions, plus some easy ones when I needed a break. Most were Amazon-tagged, but I do not think that mattered much. If you do Blind 75 or NeetCode, you will probably be fine.</ListItem>
              <ListItem >For system design, I watched YouTube videos. The two channels I used most were&nbsp;{<Link href="https://www.youtube.com/@jordanhasnolife5163/videos">Jordan has no life</Link>}&nbsp;and&nbsp;{<Link href="https://www.youtube.com/@hello_interview/videos"> Hello Interview - Tech Interview Preparation</Link>}.</ListItem>
              <ListItem >For low-level design, I only spent one day because I did not realize it would be tested until the last day. I also read the recruiter document too late, which was my mistake. I looked up recommendations and saw people suggest Grokking the Low Level Design Interview Using OOD Principles. Since I only had one day left, I did not buy it; I used ChatGPT to work through sample questions instead.</ListItem>
            </List>
            For behavioral prep, I started one day before the interview.
            <List>
              <ListItem>
                I prepared about 20 stories because I was told not to reuse stories, even if one story matched multiple Leadership Principles.
              </ListItem>
            </List>
            </Typography>
            <Typography variant='body1' gutterBottom>
              I was sad and disappointed when I got the news. This was probably the closest I have ever been to working at a FAANG company, and I fell short. It felt worse because I really tried my best.
            </Typography>
            <Typography variant='body1' gutterBottom>I also built two things throughout this entire experience:
              <List>
                <ListItem>
                  <Typography variant='body1' gutterBottom>
                  1. A Chrome extension that shows the dislike count on LeetCode questions. I wanted to see likes vs. dislikes while solving problems. LeetCode hides it in the UI, but the value is available via the API. <Link href="https://github.com/LonelyLok/project-pain">Github Link</Link>
                  </Typography>
                </ListItem>
                <ListItem>
                 <Typography variant='body1' gutterBottom>
                 2. A web app that tracks Amazon SDE1 jobs. I was told SDE1 is generally for candidates with less than one year of experience. I built it because the filters on this <Link href="https://www.amazon.jobs/en/search?offset=0&result_limit=10&sort=relevant&category%5B%5D=software-development&country%5B%5D=USA&distanceType=Mi&radius=24km&industry_experience=less_than_1_year&latitude=&longitude=&loc_group_id=&loc_query=&base_query=&city=&country=&region=&county=&query_options=&">site</Link> were sometimes inconsistent. <Link href="https://github.com/LonelyLok/amazon-sde-1-job-search">Github Link</Link>
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
