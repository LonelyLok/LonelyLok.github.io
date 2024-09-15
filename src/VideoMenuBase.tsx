import { useState, useEffect } from 'react';
import {
  Typography,
  Card,
  CardMedia,
  Container,
  CardContent,
  CardActionArea,
  Modal,
  Box,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1280,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const videoWidth = 1280;
const videoHeight = 720;

const thumbnailLinkBuilder = (youtubeVideoId: string) =>
  `https://img.youtube.com/vi/${youtubeVideoId}/0.jpg`;
const videoLinkBuilder = (youtubeVideoId: string) =>
  `https://www.youtube.com/embed/${youtubeVideoId}`;

const VideoMenuBase = ({
  mainTitle,
  data,
}: {
  mainTitle: string;
  data: {
    id: number;
    title: string;
    youtubeVideoId: string;
    tags?: string[];
  }[];
}) => {
  const uniqueTags = [...new Set(data.flatMap(({ tags }) => tags || []))];
  const [filters, setFilters] = useState<Record<string, boolean>>({});
  useEffect(() => {
    setFilters(uniqueTags.reduce((acc, tag) => ({ ...acc, [tag]: true }), {}));
  }, []);
  const [open, setOpen] = useState(false);
  const [vId, setVId] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setVId('');
    setOpen(false);
  };
  const handleClick = (youtubeVideoId: string) => {
    handleOpen();
    setVId(youtubeVideoId);
  };

  const handleTagCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = event.target;
    setFilters((prev) => ({ ...prev, [name]: checked }));
  };
  return (
    <Box display='flex' width='100%'>
      <Box width='10%' p={2}>
        <FormGroup>
          <Typography variant='subtitle1' sx={{ mt: 8, mb: 3 }}>
            Filter by tags
          </Typography>
          {Object.entries(filters).map(([tag, checked]) => {
            return (
              <FormControlLabel
                label={tag}
                control={
                  <Checkbox
                    style={{
                      color: 'white',
                    }}
                    name={tag}
                    checked={checked}
                    onChange={handleTagCheckboxChange}
                  />
                }
              />
            );
          })}
        </FormGroup>
      </Box>
      <Box width='90%' p={2}>
        <Container maxWidth='xl'>
          <Typography align='center' variant='h4' sx={{ mt: 1, mb: 3 }}>
            {mainTitle}
          </Typography>
          <Grid container spacing={2.5}>
            {data
              .filter((d) => {
                if (!d?.tags?.length) {
                  return true;
                }
                return d.tags.some((tag) => filters[tag]);
              })
              .map(({ youtubeVideoId, title }) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={youtubeVideoId}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <CardActionArea onClick={() => handleClick(youtubeVideoId)}>
                      <CardMedia
                        component='img'
                        image={thumbnailLinkBuilder(youtubeVideoId)}
                        alt={title}
                        height='200'
                      />
                      <CardContent>
                        <Typography gutterBottom component='div'>
                          {title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
          </Grid>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={style}>
              <iframe
                width={videoWidth}
                height={videoHeight}
                src={videoLinkBuilder(vId)}
                title='YouTube video player'
                allow='autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </Box>
          </Modal>
        </Container>
      </Box>
    </Box>
  );
};

export default VideoMenuBase;
