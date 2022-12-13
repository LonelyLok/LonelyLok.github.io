import { Typography, Card, CardMedia, Container, CardContent } from '@mui/material';
import './VideoMenuBase.css';
export class VideoMenuBase {
    private title: string;
    private data: {id: number; thumbnailLink: string; videoLink: string; title: string}[];
    constructor({
        title,
        data
    }: {
        title: string;
        data: {id: number; thumbnailLink: string; videoLink: string; title: string}[];
    }) {
        this.title = title;
        this.data = data;
    }

    run() {
        return (<div>
            <Typography align='center' variant='h4'>{this.title}</Typography>
            <Container >
                <div className="customContainer">
                    {this.data.map(({thumbnailLink, title})=>{
                        return(
                            <Card>
                        <CardMedia component="img" image={thumbnailLink} alt={title}></CardMedia>
                        <CardContent>
                            <Typography gutterBottom component="div">
                                Title: {title}
                            </Typography>
                        </CardContent>
                    </Card>
                        )
                    })}
                </div>
            </Container>
        </div>)
    }
}