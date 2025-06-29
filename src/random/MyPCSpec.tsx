import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  IconButton,
  Tooltip,
  Button,
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useState } from 'react';
import pcPic from '../assets/pc.jpg';

const MyPCSpec = () => {
  const data = {
    CPU: 'AMD Ryzen 5 3600',
    GPU: 'Intel Arc B580',
    MOBO: 'ASROCK X570 Phantom Gaming 4',
    RAM: '32GB DDR4',
    Storage: '500GB SATA SSD, 1TB NVME SSD, 1TB SSHD',
    PSU: 'Super Flower Leadex III 650W 80+ Gold',
    CASE: 'NZXT H510',
  };

  const [isCopy, setIsCopy] = useState(false);

  const copyToClipboard = () => {
    const text = Object.entries(data)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    navigator.clipboard.writeText(text);
    setIsCopy(true);
    setTimeout(() => setIsCopy(false), 2000);
  };
  return (
    <Container>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        minHeight='100vh'
      >
        <Typography variant='h3' component='h3' gutterBottom>
          My PC Spec
        </Typography>
        <Tooltip title={isCopy ? 'Copied!' : 'Copy to clipboard'} arrow>
          <IconButton color='inherit' onClick={copyToClipboard}>
            <ContentCopyIcon />
          </IconButton>
        </Tooltip>
        <List>
          {Object.entries(data).map(([key, value]) => {
            return (
              <ListItem>
                <Typography variant='body1' gutterBottom>
                  {key}: {value}
                </Typography>
              </ListItem>
            );
          })}
          <ListItem sx={{ justifyContent: 'center' }}>
              <Box
                component='img'
                src={pcPic}
                alt='My PC'
                sx={{ maxWidth: '20%' }}
              />
          </ListItem>
        </List>
        <Typography variant='body2' gutterBottom>
          <Button
            variant='contained'
            href='https://pcpartpicker.com/list/sv3Qv4'
            rel='noopener noreferrer'
            target='_blank'
            endIcon={<OpenInNewIcon />}
          >
            PC part picker link
          </Button>
        </Typography>
      </Box>
    </Container>
  );
};

export default MyPCSpec;
