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

const thumbnailLinkBuilder = (youtubeVideoId: string) => `https://img.youtube.com/vi/${youtubeVideoId}/0.jpg`;
const videoLinkBuilder = (youtubeVideoId: string) => `https://www.youtube.com/embed/${youtubeVideoId}`;

const VideoMenuBase = ({
    mainTitle,
    data
}: {
    mainTitle: string;
    data: { id: number;  title: string; youtubeVideoId: string }[];
}) => {
    const [open, setOpen] = React.useState(false);
    const [vId, setVId] = React.useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setVId('')
        setOpen(false)
    };
    const handleClick = (youtubeVideoId: string) => {
        handleOpen()
        setVId(youtubeVideoId)
    } 
    return (<div>
        <Typography align='center' variant='h4'>{mainTitle}</Typography>
        <Container >
            <div className="customContainer">
                {data.map(({ youtubeVideoId, title }) => {
                    return (
                        <Card>
                            <CardActionArea onClick={() => handleClick(youtubeVideoId)}>
                                <CardMedia component="img" image={thumbnailLinkBuilder(youtubeVideoId)} alt={title}>
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
                            {(<iframe width={videoWidth} height={videoHeight} src={videoLinkBuilder(vId)} title="YouTube video player" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)}
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </Container>
    </div>)
}

export default VideoMenuBase