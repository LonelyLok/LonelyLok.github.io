import { VideoMenuBase } from "./VideoMenuBase"
const videoMenuBase = new VideoMenuBase({
    title: 'Monster Hunter World',
    data: [
        {id: 1, title: 'Long Sword, Alatreon', thumbnailLink: 'https://img.youtube.com/vi/c9rNif89naI/0.jpg', videoLink: ''},
        {id: 2, title: 'Long Sword, Kirin', thumbnailLink: 'https://img.youtube.com/vi/TMTJ1AbnAAI/0.jpg', videoLink: ''},
        {id: 3, title: 'Long Sword, Teostra', thumbnailLink: 'https://img.youtube.com/vi/qi0ZTAlbyis/0.jpg', videoLink: ''},
        {id: 4, title: 'Long Sword, Ruiner Nergigante', thumbnailLink: 'https://img.youtube.com/vi/OBNxqgdpxvk/0.jpg', videoLink: ''}
    ]
})

const MonsterHunterWorldVideo = () => {
    return(
        <div>
            {videoMenuBase.run()}
        </div>
    )
} 

export default MonsterHunterWorldVideo