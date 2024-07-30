import React, { useState, useEffect, useCallback, useRef } from 'react';
import BedroomImage from '../assets/bedroom.png';
import BedroomSleepImage from '../assets/bedroomsleep.png';
import HallwayImage from '../assets/hallway.png';
import FigImage from '../assets/fig.png';
import LivingRoomImage from '../assets/livingroom.png';
import BreadImage from '../assets/bread.png';

const roomMap: Record<string, any> = {
  '0': {
    name: 'bedroomSleep',
    image: BedroomSleepImage,
    texts: [
      {
        name: 'bed',
        text: 'press "e" to wake up',
        minX: 0,
        maxX: 800,
        x: 100,
        y: 300,
      },
    ],
  },
  '1': {
    name: 'bedroom',
    image: BedroomImage,
    texts: [
      {
        name: 'bed',
        text: 'press "e" to sleep',
        minX: 16,
        maxX: 144,
        x: 100,
        y: 300,
      },
      {
        name: 'door',
        text: 'press "e" to open door',
        minX: 296,
        maxX: 360,
        x: 330,
        y: 300,
      },
      {
        name: 'laptop',
        text: 'press "e" to use laptop',
        minX: 566,
        maxX: 694,
        x: 600,
        y: 300,
      },
    ],
  },
  '2': {
    name: 'hallway',
    image: HallwayImage,
    texts: [
      {
        name: 'bedroom',
        text: 'press "e" to enter bedroom',
        minX: 0,
        maxX: 48,
        x: 10,
        y: 250,
      },
      {
        name: 'bathroom',
        text: 'press "e" to use bathroom',
        minX: 320,
        maxX: 376,
        x: 350,
        y: 250,
      },
      {
        name: 'livingRoom',
        text: 'press "e" to enter living room',
        minX: 624,
        maxX: 680,
        x: 600,
        y: 250,
      },
    ],
  },
  '3': {
    name: 'livingRoom',
    image: LivingRoomImage,
    texts: [
      {
        name: 'hallway',
        text: 'press "e" to enter hallway',
        minX: 0,
        maxX: 48,
        x: 10,
        y: 250,
      },
      {
        name: 'tableWithFood',
        text: 'press "e" to eat food',
        minX: 334,
        maxX: 454,
        x: 350,
        y: 250,
      },
      {
        name: 'outside',
        text: 'press "e" to leave home',
        minX: 624,
        maxX: 680,
        x: 620,
        y: 230,
      },
    ],
  },
};

const sleepObj = roomMap['0'].texts[0];
const wakeUpObj = roomMap['1'].texts[0];

const bedroomDoor = roomMap['1'].texts[1];

const backToBedroom = roomMap['2'].texts[0];
const backToHallway = roomMap['3'].texts[0];

const goingToLivingRoom = roomMap['2'].texts[2];

const bathroom = roomMap['2'].texts[1];

const laptopNoFood = {
  name: 'laptopNoFood',
  text: 'need to eat first',
  minX: 566,
  maxX: 694,
  x: 600,
  y: 300,
};

const bathroomInside = {
  name: 'bathroomInside',
  text: 'press "e" to leave bathroom',
  minX: 320,
  maxX: 376,
  x: 350,
  y: 250,
};

const livingRoomNotOpen = {
  name: 'livingRoomNotOpen',
  text: 'I should brush my teeth first.',
  minX: 624,
  maxX: 680,
  x: 600,
  y: 250,
};

const AnimatedText = ({ text, onComplete }: any) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(displayedText + text.charAt(index));
        setIndex(index + 1);
      }, 100); // Adjust the speed of animation here

      return () => clearTimeout(timer);
    } else {
      onComplete && onComplete();
    }
  }, [index, text, displayedText, onComplete]);

  return <p>{displayedText}</p>;
};

const CharacterControl = () => {
  const intervalRef = useRef<number | null>(null);
  const [timeText, setTimeText] = useState('06:45');
  const [currentWord, setCurrentWord] = useState('Z');
  const [position, setPosition] = useState({ x: 0, y: 320 });
  const [food, setFood] = useState(50);
  const [task, setTask] = useState('wake up, clean up, eat food');
  const [isCleaned, setIsCleaned] = useState(false);
  const [beenLivingRoom, setBeenLivingRoom] = useState(false);
  const [isInsideBathroom, setIsInsideBathroom] = useState(false);
  const [isShowFig, setIsShowFig] = useState(true);
  const [isAteBread, setIsAteBread] = useState(false);
  const [roomId, setRoomId] = useState('0');
  const [interactObj, setInteractObj] = useState<any>(sleepObj);
  const [isUsingLaptop, setIsUsingLaptop] = useState(false);
  const [isLine0Finish, setIsLine0Finish] = useState(false);
  const [isLine1Finish, setIsLine1Finish] = useState(false);
  const [isLine2Finish, setIsLine2Finish] = useState(false);
  const [isWorkDone, setIsWorkDone] = useState(false);
  const [isGameDone, setIsGameDone] = useState(false);

  const moveCharacter = useCallback(
    (action) => {
      if (isGameDone) {
        return;
      }
      if (roomId === '0') {
        if (action === 'interact') {
          setRoomId('1');
          setInteractObj(wakeUpObj);
        }
      }

      if (isInsideBathroom) {
        if (action === 'interact') {
          setIsInsideBathroom(false);
          setInteractObj(bathroom);
          setIsShowFig(true);
        }
      }
      roomId !== '0' &&
        isShowFig &&
        setPosition((prevPosition) => {
          let newX = prevPosition.x;
          let newY = prevPosition.y;

          const characterWidth = 98;
          const characterHeight = 250;
          const gameAreaWidth = 800;
          const gameAreaHeight = 600;

          const movePixel = 8;

          switch (action) {
            case 'up':
              newY = Math.max(newY - movePixel, 0);
              break;
            case 'down':
              newY = Math.min(
                newY + movePixel,
                gameAreaHeight - characterHeight
              );
              break;
            case 'left':
              newX = Math.max(newX - movePixel, 0);
              break;
            case 'right':
              newX = Math.min(newX + movePixel, gameAreaWidth - characterWidth);
              break;
            default:
              break;
          }

          if (roomId === '1') {
            const texts = roomMap[roomId].texts;
            const area = texts.find(
              (t: any) => newX >= t.minX && newX <= t.maxX
            );
            if (area) {
              setInteractObj(area);
            } else {
              setInteractObj(null);
            }

            if (action === 'interact') {
              if (area) {
                if (area.name === 'bed') {
                  setRoomId('0');
                  setInteractObj(sleepObj);
                  if (task === 'Go to bed') {
                    setIsGameDone(true);
                    setInteractObj({
                      ...sleepObj,
                      text: 'Thank you for playing.',
                    });
                  }
                } else if (area.name === 'laptop') {
                  if (food < 100) {
                    if (isWorkDone) {
                      setInteractObj({
                        text: 'no need for laptop after work',
                        minX: 566,
                        maxX: 694,
                        x: 600,
                        y: 300,
                      });
                    } else {
                      setInteractObj(laptopNoFood);
                    }
                  } else if (timeText === '07:00') {
                    setIsUsingLaptop(true);
                    if (isUsingLaptop && isLine2Finish) {
                      setIsUsingLaptop(false);
                      setIsLine0Finish(false);
                      setIsLine1Finish(false);
                      setIsLine2Finish(false);
                      setFood(10);
                      setTimeText('16:00');
                      setIsWorkDone(true);
                      setTask('Go to bed');
                    }
                  }
                } else if (area.name === 'door') {
                  setRoomId('2');
                  newX = 24;
                  setInteractObj(backToBedroom);
                }
              }
            }
          } else if (roomId === '2') {
            const texts = roomMap[roomId].texts;
            const area = texts.find(
              (t: any) => newX >= t.minX && newX <= t.maxX
            );
            if (area) {
              setInteractObj(area);
            } else {
              setInteractObj(null);
            }

            if (action === 'interact') {
              if (area) {
                if (area.name === 'bedroom') {
                  setRoomId('1');
                  setInteractObj(bedroomDoor);
                  if (
                    task === 'go back to bedroom and start working.' &&
                    timeText === '06:50'
                  ) {
                    setTimeText('07:00');
                  }
                  newX = 336;
                } else if (area.name === 'livingRoom') {
                  if (!isCleaned) {
                    setInteractObj(livingRoomNotOpen);
                  } else {
                    if (!beenLivingRoom) {
                      setBeenLivingRoom(true);
                      setTimeText('06:50');
                    }
                    setRoomId('3');
                    setInteractObj(backToHallway);
                    newX = 24;
                  }
                } else if (area.name === 'bathroom') {
                  if (!isCleaned) {
                    setIsCleaned(true);
                  }
                  if (!isInsideBathroom) {
                    setIsInsideBathroom(true);
                    setInteractObj(bathroomInside);
                    setIsShowFig(false);
                  }
                }
              }
            }
          } else if (roomId === '3') {
            const texts = roomMap[roomId].texts;
            const area = texts.find(
              (t: any) => newX >= t.minX && newX <= t.maxX
            );
            if (area) {
              setInteractObj(area);
            } else {
              setInteractObj(null);
            }

            if (action === 'interact') {
              if (area) {
                if (area.name === 'hallway') {
                  setRoomId('2');
                  setInteractObj(goingToLivingRoom);
                  newX = 680;
                } else if (area.name === 'outside') {
                  setInteractObj({
                    text: 'I do not go outside.',
                    x: 620,
                    y: 230,
                  });
                } else if (area.name === 'tableWithFood') {
                  if (isAteBread) {
                    setInteractObj({
                      text: 'no food to eat',
                      x: 350,
                      y: 250,
                    });
                  } else {
                    setIsAteBread(true);
                    setFood(100);
                    setTask('go back to bedroom and start working.');
                  }
                }
              }
            }
          }

          return isUsingLaptop
            ? { x: prevPosition.x, y: prevPosition.y }
            : { x: newX, y: newY };
        });
    },
    [
      roomId,
      isInsideBathroom,
      isShowFig,
      isAteBread,
      isUsingLaptop,
      isLine2Finish,
      timeText,
      isWorkDone,
      isGameDone,
    ]
  );

  const styles: { [key: string]: React.CSSProperties } = {
    gameArea: {
      position: 'relative',
      display: 'inline-block',
      width: '800px',
      height: '600px',
      backgroundImage: `url(${roomMap[roomId].image})`,
      backgroundRepeat: 'no-repeat',
    },
    character: {
      position: 'relative',
      width: '98px',
      height: '250px',
      backgroundImage: `url(${FigImage})`,
      zIndex: 2,
    },
    bread: {
      position: 'relative',
      width: '115px',
      height: '86px',
      left: 405,
      top: 100,
      backgroundImage: `url(${BreadImage})`,
      zIndex: 1,
    },
    laptopScreen: {
      position: 'absolute',
      width: '600px',
      height: '400px',
      backgroundColor: 'grey',
      left: '100px',
      top: '100px',
      border: '2px solid black',
      color: 'black' /* Text color */,
      alignItems: 'center' /* Vertically center */,
      justifyContent: 'center' /* Horizontally center */,
      textAlign: 'center',
      zIndex: 3,
    },
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      switch (event.key) {
        // case 'w':
        // case 'W':
        //     moveCharacter('up');
        //     break;
        // case 's':
        // case 'S':
        //     moveCharacter('down');
        //     break;
        case 'a':
        case 'A':
          moveCharacter('left');
          break;
        case 'd':
        case 'D':
          moveCharacter('right');
          break;
        case 'e':
        case 'E':
          moveCharacter('interact');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [moveCharacter]);

  useEffect(() => {
    if (roomId === '0') {
      const intervalId = window.setInterval(() => {
        const time = new Date().getSeconds(); // Get current time in milliseconds
        if (time % 3 === 0) {
          // Check if even
          setCurrentWord('Z');
        } else if (time % 3 === 1) {
          // Else it's odd
          setCurrentWord('ZZ');
        } else if (time % 3 === 2) {
          setCurrentWord('ZZZ');
        }
      }, 1);
      intervalRef.current = intervalId;
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [roomId]);

  const sleepingTextStyle: React.CSSProperties = {
    position: 'absolute',
    color: 'black',
    fontSize: '24px',
    fontWeight: 'bold',
    textShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
    left: `${40}px`, // Adjust position relative to the character
    top: `${400}px`, // Adjust position relative to the character
  };

  const healthBarContainerStyle: React.CSSProperties = {
    width: '100px', // Maximum health width
    height: '20px',
    border: '2px solid black', // Border to show the max health limit
    backgroundColor: '#ddd', // Optional: a background color to show empty health
  };

  const healthBarStyle: React.CSSProperties = {
    width: `${food}%`, // width of the bar changes with health
    height: '20px',
    backgroundColor: 'green',
    transition: 'width 0.5s ease-in-out',
  };

  return (
    //@ts-ignore
    <div style={styles.gameArea}>
      <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ color: 'black' }}>Hunger:</div>
          <div style={healthBarContainerStyle}>
            <div style={healthBarStyle}></div>{' '}
          </div>
        </div>
      </div>
      <div style={{ color: 'black', position: 'absolute', left: '350px' }}>
        Time: {timeText}
      </div>
      <div style={{ color: 'black', position: 'absolute', left: '500px' }}>
        Task: {task}
      </div>
      {interactObj && (
        <div
          style={{
            position: 'absolute',
            left: `${interactObj.x}px`,
            top: `${interactObj.y}px`,
            color: 'black',
          }}
        >
          {interactObj?.text}
        </div>
      )}
      {roomId === '0' && currentWord && (
        <div style={sleepingTextStyle}>{currentWord}</div>
      )}
      {roomId === '1' && isUsingLaptop && (
        <div style={styles.laptopScreen}>
          <AnimatedText
            text='work until 16:00'
            onComplete={() => setIsLine0Finish(true)}
          ></AnimatedText>
          {isLine0Finish && (
            <AnimatedText
              text="I am a software engineer so I write code like console.log('Hello world.')"
              onComplete={() => setIsLine1Finish(true)}
            ></AnimatedText>
          )}
          {isLine1Finish && (
            <AnimatedText
              text='press e to exit laptop'
              onComplete={() => setIsLine2Finish(true)}
            ></AnimatedText>
          )}
        </div>
      )}
      {roomId !== '0' && isShowFig && (
        <div
          //@ts-ignore
          style={{
            ...styles.character,
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        />
      )}
      {roomId === '3' && !isAteBread && <div style={styles.bread}></div>}
      <div />
    </div>
  );
};

export default CharacterControl;
