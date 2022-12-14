import { Typography, Card, CardMedia, Container, CardContent, CardActionArea, Modal, Box } from '@mui/material';
import * as React from 'react';
import './VideoMenuBase.css';

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

const VideoMenuBase = ({
    mainTitle,
    data
}: {
    mainTitle: string;
    data: { id: number; thumbnailLink: string; videoLink: string; title: string }[];
}) =>{
const [open, setOpen] = React.useState(false);
const [videoLink, setVideoLink] = React.useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setVideoLink('')
    setOpen(false)
  };
  const handleClick = (videoLink: string) => {
    handleOpen()
    setVideoLink(videoLink)
  }
  return(<div>
    <Typography align='center' variant='h4'>{mainTitle}</Typography>
    <Container >
        <div className="customContainer">
            {data.map(({ thumbnailLink, title, videoLink }) => {
                return (
                    <Card>
                        <CardActionArea onClick={() => handleClick(videoLink)}>
                            <CardMedia component="img" image={thumbnailLink} alt={title}>
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom component="div">
                                    Title: {title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                )
            })}
            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-description">
                                    {(<iframe width={videoWidth} height={videoHeight} src={videoLink} title="YouTube video player"frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)}
                                    </Typography>
                                </Box>
                            </Modal>
        </div>
    </Container>
</div>)
}

export default VideoMenuBase