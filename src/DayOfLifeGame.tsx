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
        <div style={styles.container}>
            <div>
            <h1>Day of Life (1920 x 1080)</h1>
            </div>
            {inGame ? (
                // Render the CharacterControl component when inGame is true
                <CharacterControl />
            ) : (
                // Render the initial play screen when inGame is false
                <div style={styles.gameArea}>
                    <div style={styles.title}>
                    </div>
                    <button onClick={handlePlayClick} style={styles.playButton}>Play</button>
                </div>
            )}
        </div>
    );
};

// Styles
const styles = {
    container: {
        textAlign: 'center',
        paddingTop: '50px', // Space for the title
    },
    gameArea: {
        display: 'inline-block',
        padding: '40px',
        width: '40%',
        minHeight: '360px',
        backgroundColor: '#f0f0f0', // Consistent background color
        borderRadius: '10px',
        // Add any other common styles for the game area
    },
    title: {
        marginBottom: '20px', // Space between title and play screen
    },
    playButton: {
        padding: '10px 20px',
        fontSize: '20px',
        cursor: 'pointer',
    }
};

export { DayOfLifeGame };