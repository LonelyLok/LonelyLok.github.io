import React, { useState, useEffect } from 'react';

const CharacterControl = () => {
    const [position, setPosition] = useState({ x: 30, y: 46 });

    const moveCharacter = (direction:any) => {
        setPosition(prevPosition => {
            let newX = prevPosition.x;
            let newY = prevPosition.y;

            switch (direction) {
                case 'up':
                    newY -= 1;
                    break;
                case 'down':
                    newY += 1;
                    break;
                case 'left':
                    newX -= 1;
                    break;
                case 'right':
                    newX += 1;
                    break;
                default:
                    break;
            }

            return { x: newX, y: newY };
        });
    };

    useEffect(() => {
        const handleKeyDown = (event:any) => {
            switch (event.key) {
                case 'w':
                case 'W':
                    moveCharacter('up');
                    break;
                case 's':
                case 'S':
                    moveCharacter('down');
                    break;
                case 'a':
                case 'A':
                    moveCharacter('left');
                    break;
                case 'd':
                case 'D':
                    moveCharacter('right');
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        //@ts-ignore
        <div style={styles.gameArea}>
            <div 
                //@ts-ignore
                style={{
                    ...styles.character,
                    left: `${position.x}%`,
                    top: `${position.y}%`
                }}
            />
            <div style={styles.bed}>
            <div style={styles.pillow} />
        </div>
        <div style={styles.blanket}/>
        </div>
    );
};

// Styles
const styles: { [key: string]: React.CSSProperties } = {
    gameArea: {
        display: 'inline-block',
        padding: '40px',
        width: '40%',
        minHeight: '360px',
        backgroundColor: '#f0f0f0', // Consistent background color
        borderRadius: '10px',
        // Add any other common styles for the game area
    },
    character: {
        position: 'absolute',
        width: '50px',
        height: '50px',
        backgroundColor: 'black',
        zIndex: 2,
    },
     bed: {
        position: 'absolute',
        width: '80px', // Bed width
        height: '150px', // Bed height
        backgroundColor: '#8B4513', // Bed color (dark brown)
        left: '30%', // Adjust as needed
        top: '45%', // Adjust as needed
        zIndex: 1,
    },
    pillow: {
        position: 'absolute',
        width: '40px', // Pillow width
        height: '20px', // Pillow height
        backgroundColor: '#FFF', // Pillow color (white)
        top: '5px', // Position from top of the bed
        left: '10px', // Position from side of the bed
        margin: '5px', // Space between pillows if more than one
        borderRadius: '5px', // Rounded corners for the pillow
        zIndex: 2,
    },
    blanket: {
        position: 'absolute',
        width: '80px', // Slightly less than the bed width
        height: '120px', // Slightly less than the bed height
        backgroundColor: '#ADD8E6', // Blanket color (light blue)
        top: '48%', // Position to align within the bed
        left: '30%', // Position to align within the bed
        borderRadius: '5px', // Optional: rounded corners for the blanket
        zIndex: 4,
    },
};

export default CharacterControl;