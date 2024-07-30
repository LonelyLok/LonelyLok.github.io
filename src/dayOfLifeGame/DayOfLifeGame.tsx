import React, { useState } from 'react';
import CharacterControl from './CharacterControl'
import { Box } from '@mui/material';

const DayOfLifeGame = () => {
    const [inGame, setInGame] = useState(false);
    // Function to handle the Play button click
    const handlePlayClick = () => {
        setInGame(true)
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{ width: '200px', padding: '20px', borderRight: '1px solid #ccc' }}>
                <p>Control:</p>
                <p>- A move left</p>
                <p>- D move right</p>
                <p>- E to interact</p>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <div style={styles.title}>
                    <h1>Day of Life</h1>
                </div>
                <div style={styles.container}>
                    {inGame ? (
                        <CharacterControl />
                    ) : (
                        <div style={styles.gameArea}>
                            <button onClick={handlePlayClick} style={styles.playButton}>Play</button>
                        </div>
                    )}
                </div>
            </Box>
        </Box>
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