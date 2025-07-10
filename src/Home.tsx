import React from 'react';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  GlobalStyles,
  Typography,
  Box,
  Container,
} from '@mui/material';

// 1. Create your MUI theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#5568fe' },
    secondary: { main: '#ff8a65' },
    background: { default: '#fafbfc', paper: '#fff' },
    text: { primary: '#222', secondary: '#555' },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h2: { fontWeight: 700, letterSpacing: '-0.02em' },
    h4: { fontWeight: 400, color: '#444' },
    body1: { lineHeight: 1.6 },
  },
  spacing: 4,
});

export default function Home() {
  return (
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center', px: 3 }}>
          <Typography variant="h2" gutterBottom>
            Hey there, I’m Henry
          </Typography>
          <Typography variant="h4" gutterBottom sx={{ color: '#fcfcfc' }}>
            A ChatGPT enjoyer, PC gamer.
          </Typography>
        </Container>
      </Box>
  );
}