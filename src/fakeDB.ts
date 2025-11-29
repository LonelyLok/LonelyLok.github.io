export const games = [
    {
        id: 1,
        imgLink:
            'https://cdn2.steamgriddb.com/thumb/059c97dd02d3706cf2195a41c0028caf.jpg',
        releaseYear: 2021,
        name: 'Monster Hunter Rise',
        hrefLink: '/monsterhunterrisevideo',
    },
    {
        id: 2,
        imgLink:
            'https://cdn2.steamgriddb.com/thumb/864598104d83374578ab53f3822d71f6.jpg',
        releaseYear: 2018,
        name: 'Monster Hunter World',
        hrefLink: '/monsterhunterworldvideo',
    },
    {
        id: 3,
        imgLink:
            'https://cdn2.steamgriddb.com/thumb/311af4d2ca96f35eac76e62b8df57d16.jpg',
        releaseYear: 2024,
        name: 'No Rest For The Wicked',
        hrefLink: '/norestforthewickedvideo',
    },
    {
        id: 4,
        imgLink:
            'https://cdn2.steamgriddb.com/thumb/9ac2641162c8716cdf59a40367e21b6e.jpg',
        releaseYear: 2024,
        name: 'Black Myth: Wukong',
        hrefLink: '/blackmythwukongvideo',
    },
    {
        id: 5,
        imgLink:
            'https://cdn2.steamgriddb.com/thumb/704f72562168940fbfa7e9f01e0f84aa.jpg',
        releaseYear: 2024,
        name: 'Balatro',
        hrefLink: '/balatrovideo',
    },
    {
        id: 6,
        imgLink:
            'https://cdn2.steamgriddb.com/thumb/3b0827743ff1143f14f13c83ce07f9b9.jpg',
        releaseYear: 2025,
        name: 'Monster Hunter Wild',
        hrefLink: '/monsterhunterwildvideo',
    },
    {
        id: 7,
        imgLink:
            'https://cdn2.steamgriddb.com/thumb/b38fe12e61d2088a4d10fd51c6e3985d.jpg',
        releaseYear: 2024,
        name: 'Path Of Exile 2',
        hrefLink: '/pathofexile2video',
    },
    {
        id: 8,
        imgLink:
            'https://cdn2.steamgriddb.com/thumb/e7fff0c2739cf86c8aa5559eefe74220.jpg',
        releaseYear: 2025,
        name: 'Clair Obscur: Expedition 33',
        hrefLink: '/clairobscurvideo',
    },
    {
        id: 9,
        imgLink:
            'https://cdn2.steamgriddb.com/thumb/a760b04989c22fbc81c0fdf97a0349e0.jpg',
        releaseYear: 2025,
        name: 'Shape of Dreams',
        hrefLink: '/shapeofdreams',
    }
];

export const videoMap: Record<string, any> = {
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
        {
            id: 13,
            title: `Arkveld - difficulty 5 - insect glaive - 06'10''84`,
            youtubeVideoId: 'OHbmJPbddp4',
            tags: ['Insect Glaive'],
        },
        {
            id: 14,
            title: `Arkveld - difficulty 4 - charge blade - 04'37''30`,
            youtubeVideoId: 'f4CnfKYIGeE',
            tags: ['Charge Blade'],
        },
        {
            id: 15,
            title: `Arkveld - difficulty 5 - hammer - 07'07''89`,
            youtubeVideoId: 'qTvP6zMJBUM',
            tags: ['Hammer'],
        },
        {
            id: 16,
            title: `Arkveld - difficulty 3 - switch axe - 04'05''35`,
            youtubeVideoId: 'VnrXdO4PaLg',
            tags: ['Switch Axe'],
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
    'Clair Obscur: Expedition 33': [
        {
            id: 1,
            title: 'Clair Obscur: Expedition 33 - Boss fight - Simon - Normal',
            youtubeVideoId: 'kijWBltLLPg',
        },
    ],
    'Shape of Dreams': [{
        id: 1,
        title: 'Shape of Dreams - Nightmare - Mist - Primus boss fight',
        youtubeVideoId: 'a5IJLsFAtfs'
    },
    {
        id: 2,
        title: 'Shape of Dreams - Nightmare - Vesper - Primus boss fight',
        youtubeVideoId: '3G4mGh-NJF8'
    }, {
        id: 3,
        title: 'Shape of Dreams - Nightmare - Bismuth - Primus boss fight',
        youtubeVideoId: 'pydAIEhDRrk'
    },
    {
        id: 4,
        title: 'Shape of Dreams - Nightmare - Aurena - Primus boss fight',
        youtubeVideoId: 'dece-V2LrIM'
    },
    {
        id: 5,
        title: 'Shape of Dreams - Nightmare - Lacerta - Primus boss fight',
        youtubeVideoId: 'vQFO0u6zlzI'
    },
    {
        id: 6,
        title: 'Shape of Dreams - Nightmare - Yubar - Primus boss fight',
        youtubeVideoId: 'TIfAb9D2vhg'
    },
    {
        id: 7,
        title: 'Shape of Dreams - Nightmare - Shell - Primus boss fight',
        youtubeVideoId: 'sQseWtRNEc0'
    },
    {
        id: 8,
        title: 'Shape of Dreams - Nightmare - Nachia - Primus boss fight',
        youtubeVideoId: 'bibuSWJmUSw'
    }]
};