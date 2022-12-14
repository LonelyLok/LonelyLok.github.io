import  VideoMenuBase from "./VideoMenuBase"
const data = [
    {id: 1, title: 'Long Sword, Alatreon', thumbnailLink: 'https://img.youtube.com/vi/c9rNif89naI/0.jpg', videoLink: 'https://www.youtube.com/embed/c9rNif89naI'},
    {id: 2, title: 'Long Sword, Kirin', thumbnailLink: 'https://img.youtube.com/vi/TMTJ1AbnAAI/0.jpg', videoLink: 'https://www.youtube.com/embed/TMTJ1AbnAAI'},
    {id: 3, title: 'Long Sword, Teostra', thumbnailLink: 'https://img.youtube.com/vi/qi0ZTAlbyis/0.jpg', videoLink: 'https://www.youtube.com/embed/qi0ZTAlbyis'},
    {id: 4, title: 'Long Sword, Ruiner Nergigante', thumbnailLink: 'https://img.youtube.com/vi/OBNxqgdpxvk/0.jpg', videoLink: 'https://www.youtube.com/embed/OBNxqgdpxvk'}
];
const MonsterHunterWorldVideo = () => {
    return(
        <div>
            <VideoMenuBase mainTitle="Monster Hunter World" data={data}></VideoMenuBase>
        </div>
    )
} 

export default MonsterHunterWorldVideo