import VideoMenuBase from './VideoMenuBase';

const videoMap = {
  'Monster Hunter Rise': [
    {
      id: 1,
      title: 'Long Sword, Furious Rajang',
      youtubeVideoId: 'D4D0Vtm4gC4',
    },
    { id: 2, title: 'Long Sword, Demo', youtubeVideoId: 'EYW0qSlNZvg' },
  ],
  'Monster Hunter World': [
    { id: 1, title: 'Long Sword, Alatreon', youtubeVideoId: 'c9rNif89naI' },
    { id: 2, title: 'Long Sword, Kirin', youtubeVideoId: 'TMTJ1AbnAAI' },
    { id: 3, title: 'Long Sword, Teostra', youtubeVideoId: 'qi0ZTAlbyis' },
    {
      id: 4,
      title: 'Long Sword, Ruiner Nergigante',
      youtubeVideoId: 'OBNxqgdpxvk',
    },
  ],
  'No Rest For The Wicked': [
    { id: 1, title: 'cerim crucible run 1', youtubeVideoId: 'L2hc9Vmi2-8' },
  ],
};

const VideoBase = ({
  gameTitle,
}: {
  gameTitle:
    | 'Monster Hunter Rise'
    | 'Monster Hunter World'
    | 'No Rest For The Wicked';
}) => {
  const data = videoMap[gameTitle];
  return (
    <div>
      <VideoMenuBase
        mainTitle={gameTitle}
        data={data}
      ></VideoMenuBase>
    </div>
  );
};

export default VideoBase;
