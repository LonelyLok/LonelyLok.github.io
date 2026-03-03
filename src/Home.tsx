import React from 'react';
import { Typography, Box, Container, Stack, Chip } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 72px)',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center', px: 3 }}>
        <Typography variant="h2" gutterBottom>
          Henry Yu
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: 'text.secondary', fontWeight: 500, maxWidth: 640, mx: 'auto' }}
        >
          Software engineer. Gamer. Building small things on the internet.
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          flexWrap="wrap"
          sx={{ mt: 3, gap: 1 }}
        >
          <Chip label="Software engineer" variant="outlined" />
          <Chip label="ChatGPT enjoyer" variant="outlined" />
          <Chip label="Vibe code legend" variant="outlined" />
          <Chip label="Monster hunter" variant="outlined" />
        </Stack>
      </Container>
    </Box>
  );
}
