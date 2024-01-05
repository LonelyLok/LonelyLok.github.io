import React, { useState } from 'react';
import CharacterControl from './CharacterControl'
// Add additional imports if needed

const DayOfLifeGame = () => {
    const [inGame, setInGame] = useState(false);
    // Function to handle the Play button click
    const handlePlayClick = () => {
        setInGame(true)
    };

    return (
        //@ts-ignore
        <div>
            <div style={styles.title}>
            <h1>Day of Life</h1>
            </div>
            <div style={styles.container}>
            {inGame ? (
                // Render the CharacterControl component when inGame is true
                <CharacterControl />
            ) : (
                // Render the initial play screen when inGame is false
                <div style={styles.gameArea}>
                    <button onClick={handlePlayClick} style={styles.playButton}>Play</button>
                </div>
            )}
        </div>
        <div style={styles.sideBox}>
        <p>Control:</p>
        <p>- A move left</p>
        <p>- D move right</p>
        <p>- E to interact</p>
        </div>
        </div>
        
    );
};

// Styles
const styles: any = {
    container: {
        display: 'flex',
        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        textAlign: 'center',
    },
    sideBox: {
        position: 'relative',
        top: '-600px',
        left: '1400px'
    },
    gameArea: {
        display: 'inline-block',
        width: '800px',
        height: '600px',
        backgroundColor: '#f0f0f0', // Consistent background color
        // Add any other common styles for the game area
    },
    title: {
        justifyContent: 'center',
        textAlign: 'center', 
    },
    playButton: {
        padding: '10px 20px',
        fontSize: '20px',
        cursor: 'pointer',
    }
};

export { DayOfLifeGame };