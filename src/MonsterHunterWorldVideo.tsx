import  VideoMenuBase from "./VideoMenuBase"
const data = [
    {id: 1, title: 'Long Sword, Alatreon', youtubeVideoId: 'c9rNif89naI'},
    {id: 2, title: 'Long Sword, Kirin', youtubeVideoId: 'TMTJ1AbnAAI'},
    {id: 3, title: 'Long Sword, Teostra', youtubeVideoId: 'qi0ZTAlbyis'},
    {id: 4, title: 'Long Sword, Ruiner Nergigante', youtubeVideoId: 'OBNxqgdpxvk'}
];
const MonsterHunterWorldVideo = () => {
    return(
        <div>
            <VideoMenuBase mainTitle="Monster Hunter World" data={data}></VideoMenuBase>
        </div>
    )
} 

export default MonsterHunterWorldVideo