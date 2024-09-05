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
    { id: 2, title: '(Early Access Patch 1) - Cerim Crucible - Mage', youtubeVideoId: '8TmsKCmq_f4' },
    { id: 3, title: '(Early Access Patch 1) - Cerim Crucible - Archer', youtubeVideoId: 'mDR6bVF2Dpw' },
    { id: 4, title: 'No Rest for the Wicked Early Access Crucible Update ooga booga Crucible run', youtubeVideoId: '-5A3sfdUa0M' },
  ],
  'Black Myth: Wukong': [
    { id: 1, title: 'wandering wight ooga booga', youtubeVideoId: 'QZMEQdwNleI' },
    { id: 2, title: 'guangzhi ooga booga', youtubeVideoId: 'hGQ-gOvEXOg' },
  ]
};

const VideoBase = ({
  gameTitle,
}: {
  gameTitle:
    | 'Monster Hunter Rise'
    | 'Monster Hunter World'
    | 'No Rest For The Wicked'
    | 'Black Myth: Wukong';
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
