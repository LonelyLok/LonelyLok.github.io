import  VideoMenuBase from "./VideoMenuBase"
const data = [
    {id: 1, title: 'Long Sword, Furious Rajang', youtubeVideoId: 'D4D0Vtm4gC4'},
    {id: 2, title: 'Long Sword, Demo', youtubeVideoId: 'EYW0qSlNZvg'}
];
const MonsterHunterRiseVideo = () => {
    return(
        <div>
            <VideoMenuBase mainTitle="Monster Hunter Rise" data={data}></VideoMenuBase>
        </div>
    )
} 

export default MonsterHunterRiseVideo