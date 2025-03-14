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
    {
      id: 1,
      title: 'Long Sword, Alatreon, 08:52',
      youtubeVideoId: 'c9rNif89naI',
      tags: ['Long Sword'],
    },
    {
      id: 2,
      title: 'Long Sword, Kirin, 04:18',
      youtubeVideoId: 'TMTJ1AbnAAI',
      tags: ['Long Sword'],
    },
    {
      id: 3,
      title: 'Long Sword, Teostra, 04:55',
      youtubeVideoId: 'qi0ZTAlbyis',
      tags: ['Long Sword'],
    },
    {
      id: 4,
      title: 'Long Sword, Ruiner Nergigante, 04:22',
      youtubeVideoId: 'OBNxqgdpxvk',
      tags: ['Long Sword'],
    },
    {
      id: 5,
      title: 'Charge blade, Teostra, 09:42',
      youtubeVideoId: 'oKeZOmTl1P8',
      tags: ['Charge Blade'],
    },
    {
      id: 6,
      title: 'Charge blade, Teostra, 08:42',
      youtubeVideoId: 'tCLUNmsKmRs',
      tags: ['Charge Blade'],
    },
    {
      id: 7,
      title: 'Hammer, Teostra, 06:25',
      youtubeVideoId: 'b3EcxnrF90I',
      tags: ['Hammer'],
    },
    {
      id: 8,
      title: 'Great sword, Teostra, 06:26',
      youtubeVideoId: 'o16nkiJj2X4',
      tags: ['Great sword'],
    },
  ],
  'No Rest For The Wicked': [
    { id: 1, title: 'cerim crucible run 1', youtubeVideoId: 'L2hc9Vmi2-8' },
    {
      id: 2,
      title: '(Early Access Patch 1) - Cerim Crucible - Mage',
      youtubeVideoId: '8TmsKCmq_f4',
    },
    {
      id: 3,
      title: '(Early Access Patch 1) - Cerim Crucible - Archer',
      youtubeVideoId: 'mDR6bVF2Dpw',
    },
    {
      id: 4,
      title:
        'No Rest for the Wicked Early Access Crucible Update ooga booga Crucible run',
      youtubeVideoId: '-5A3sfdUa0M',
    },
  ],
  'Black Myth: Wukong': [
    {
      id: 1,
      title: 'wandering wight ooga booga',
      youtubeVideoId: 'QZMEQdwNleI',
      tags: ['chapter1'],
    },
    {
      id: 2,
      title: 'guangzhi ooga booga',
      youtubeVideoId: 'hGQ-gOvEXOg',
      tags: ['chapter1'],
    },
    {
      id: 3,
      title: 'lingxuz ooga booga',
      youtubeVideoId: 'Mnt2MOHbHI0',
      tags: ['chapter1'],
    },
    {
      id: 4,
      title: 'baw li guhh lang ooga booga',
      youtubeVideoId: 'VJha3FWmca8',
      tags: ['chapter1'],
    },
    {
      id: 5,
      title: 'guangmou ooga booga',
      youtubeVideoId: 'Mn1JhBdB1Po',
      tags: ['chapter1'],
    },
    {
      id: 6,
      title: 'whiteclad noble ooga booga',
      youtubeVideoId: 'V0Eur-x-ljE',
      tags: ['chapter1'],
    },
    {
      id: 7,
      title: 'elder jinchi ooga booga',
      youtubeVideoId: 'hcnlcpL-rEg',
      tags: ['chapter1'],
    },
    {
      id: 8,
      title: 'black wind king ooga booga',
      youtubeVideoId: '6PxLzvQruNQ',
      tags: ['chapter1'],
    },
    {
      id: 9,
      title: 'black bear guai ooga booga',
      youtubeVideoId: 'V_YnIXOfEHs',
      tags: ['chapter1'],
    },
    {
      id: 10,
      title: 'lang li guhh baw ooga booga',
      youtubeVideoId: '68UBnLuaId8',
      tags: ['chapter2'],
    },
    {
      id: 12,
      title: 'king and second price of flowing sands ooga booga',
      youtubeVideoId: 'fkenaaOvQg4',
      tags: ['chapter2'],
    },
    {
      id: 13,
      title: 'first price of flowing sands ooga booga',
      youtubeVideoId: 'xBKXe0iix7M',
      tags: ['chapter2'],
    },
  ],
  Balatro: [
    { id: 1, title: 'red deck gold stake', youtubeVideoId: 'NJK0HFxrH0A' },
    { id: 2, title: 'blue deck gold stake', youtubeVideoId: 'q_HOS0jhaLE' },
    { id: 3, title: 'yellow deck gold stake', youtubeVideoId: 'hib6XjY1Zlw' },
    { id: 4, title: 'green deck gold stake', youtubeVideoId: 's-rLV3AMJV4' },
    {
      id: 5,
      title: 'checkered deck gold stake',
      youtubeVideoId: 'PGUisX3czvE',
    },
    {
      id: 6,
      title: 'abandoned deck gold stake',
      youtubeVideoId: 'zqSxUpTscrw',
    },
    { id: 7, title: 'black deck gold stake', youtubeVideoId: 'p1QMdK79n18' },
    { id: 8, title: 'ghost deck gold stake', youtubeVideoId: '-ptPcw9cq0A' },
    { id: 9, title: 'magic deck gold stake', youtubeVideoId: '5eAsRZJoLWE' },
    { id: 10, title: 'nebula deck gold stake', youtubeVideoId: 'DW4VetVst5g' },
    { id: 11, title: 'plasma deck gold stake', youtubeVideoId: 'oXyuSlGwKNw' },
  ],
  'Monster Hunter Wild': [
    {
      id: 1,
      title: 'Beta Test - Chatacabra - Long Sword',
      youtubeVideoId: 'nA6AKJ8kLWM',
      tags: ['Long Sword'],
    },
    {
      id: 2,
      title: 'Beta Test - Chatacabra - Bow',
      youtubeVideoId: 'dwfaG4XQa-s',
      tags: ['Bow'],
    },
    {
      id: 3,
      title: 'Beta Test - Alpha Doshaguma - Long Sword',
      youtubeVideoId: 'X9l249xKi24',
      tags: ['Long Sword'],
    },
    {
      id: 4,
      title: 'Beta Test - Chatacabra - Duel Blades',
      youtubeVideoId: 'X0aYBbGkM4o',
      tags: ['Duel Blades'],
    },
    {
      id: 5,
      title: 'Beta Test - Rey Dau - Long Sword',
      youtubeVideoId: 'Tve3btxfObI',
      tags: ['Long Sword'],
    },
    {
      id: 6,
      title: 'Beta Test - Balahara - Lance',
      youtubeVideoId: 'KVqbKcGJuFo',
      tags: ['Lance'],
    },
    {
      id: 7,
      title: 'Beta Test 2 - Chained Arkveld - Long Sword',
      youtubeVideoId: 'Uor0sX5q6IU',
      tags: ['Long Sword'],
    },
    {
      id: 8,
      title: 'polygon arkveld',
      youtubeVideoId: 'UcSofbkEZ_c',
      tags: ['Long Sword'],
    },
    {
      id: 9,
      title: `Arkveld - difficulty 4 - great sword - 07'38''06`,
      youtubeVideoId: 'Cuw8Y-I_lrw',
      tags: ['Great Sword'],
    },
    {
      id: 10,
      title: `Arkveld - difficulty 3 - long sword - 03'35''77`,
      youtubeVideoId: 'yVNVOk3tHEQ',
      tags: ['Long Sword'],
    },
    {
      id: 11,
      title: `Arkveld - difficulty 4 - long sword - 04'05''43`,
      youtubeVideoId: 'V50iifhXMcg',
      tags: ['Long Sword'],
    },
    {
      id: 12,
      title: `Tempered Arkveld - difficulty 5 - great sword - 06'30''77`,
      youtubeVideoId: 'dE61S3wmW9k',
      tags: ['Great Sword'],
    },
  ],
  'Path Of Exile 2': [
    {
      id: 1,
      title: 'early access casual seepage t15 pathfinder lv 86',
      youtubeVideoId: '4CtEdx5vB-0',
    },
    {
      id: 2,
      title: 'early access casual steaming springs t15 invoker lv 90',
      youtubeVideoId: 'YSth03LlPlA',
    },
    {
      id: 3,
      title: 'early access casual the copper citadel t15 invoker lv 93',
      youtubeVideoId: 'ZcyaM-tEmiU',
    },
    {
      id: 4,
      title: 'early access casual the iron citadel t15 invoker lv 94',
      youtubeVideoId: 'iT9H4Jt5WW0',
    },
  ],
};

type GameTitles = keyof typeof videoMap;

const VideoBase = ({ gameTitle }: { gameTitle: GameTitles }) => {
  const data = videoMap[gameTitle];
  return (
    <div>
      <VideoMenuBase mainTitle={gameTitle} data={data}></VideoMenuBase>
    </div>
  );
};

export default VideoBase;
