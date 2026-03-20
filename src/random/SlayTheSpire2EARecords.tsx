import { useRef, useState } from 'react';
import {
  Box,
  Button,
  ButtonBase,
  Card,
  CardMedia,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { slayTheSpire2EARecords } from '../fakeDB';

const SlayTheSpire2EARecords = () => {
  const {
    title,
    description,
    lastUpdated,
    coverImage,
    characters,
    characterButtons,
    statsDescription,
    runHistoryDescription,
    statsItems,
    runHistoryItems,
  } = slayTheSpire2EARecords;

  const [runHistoryFilters, setRunHistoryFilters] = useState<Record<string, boolean>>(
    () => Object.fromEntries(characters.map((character) => [character, true]))
  );
  const statsRef = useRef<HTMLDivElement | null>(null);
  const runHistoryRef = useRef<HTMLDivElement | null>(null);
  const isAllSelected = characters.every((character) => runHistoryFilters[character]);
  const filteredRunHistoryItems = runHistoryItems.filter(
    ({ character }) => runHistoryFilters[character]
  );

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Box sx={{ position: 'relative' }}>
        <Box
          sx={{
            display: { xs: 'none', xl: 'block' },
            width: 140,
            position: 'fixed',
            left: 'max(24px, calc(50vw - 760px))',
            top: 96,
            zIndex: 1,
          }}
        >
          <Card sx={{ p: 2 }}>
            <Typography variant="overline" sx={{ color: 'text.secondary' }}>
              Jump To
            </Typography>
            <Stack spacing={1} sx={{ mt: 1 }}>
              <Button
                color="inherit"
                onClick={() => scrollToSection(statsRef)}
                sx={{
                  justifyContent: 'flex-start',
                  px: 0,
                  minWidth: 0,
                  color: 'text.secondary',
                }}
              >
                Stats
              </Button>
              <Button
                color="inherit"
                onClick={() => scrollToSection(runHistoryRef)}
                sx={{
                  justifyContent: 'flex-start',
                  px: 0,
                  minWidth: 0,
                  color: 'text.secondary',
                }}
              >
                Run History
              </Button>
            </Stack>
          </Card>
        </Box>

        <Box sx={{ minHeight: '100vh' }}>
          <Box
          sx={{
            mb: 5,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'flex-start' },
            justifyContent: 'center',
            gap: 3,
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Box
            component="img"
            src={coverImage}
            alt="Slay the Spire 2 cover art"
            sx={{
              width: { xs: 140, sm: 160 },
              borderRadius: 0,
              border: '1px solid rgba(159,176,199,0.2)',
              boxShadow: '0 12px 32px rgba(0,0,0,0.28)',
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />
          <Box>
            <Typography variant="h3" component="h1" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: 'block', mt: 1.5 }}
            >
              Last updated: {lastUpdated}
            </Typography>
          </Box>
        </Box>

        <Card ref={statsRef} sx={{ p: { xs: 2, md: 3 }, mb: 3, scrollMarginTop: 96 }}>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
            Stats
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            {statsDescription}
          </Typography>

          <Grid container spacing={2}>
            {statsItems.map(({ title, image }) => (
              <Grid item xs={12} sm={6} md={4} key={title}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  {title}
                </Typography>
                <Card sx={{ overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Card>

        <Card ref={runHistoryRef} sx={{ p: { xs: 2, md: 3 }, scrollMarginTop: 96 }}>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
            Run History
          </Typography>
          <FormControlLabel
            sx={{ mb: 1 }}
            label="Select all"
            control={
              <Checkbox
                size="small"
                checked={isAllSelected}
                onChange={(event) =>
                  setRunHistoryFilters(
                    Object.fromEntries(
                      characters.map((character) => [character, event.target.checked])
                    ) as Record<string, boolean>
                  )
                }
              />
            }
          />
          <Box
            sx={{
              mb: 2,
              display: 'flex',
              gap: 1,
              justifyContent: 'space-between',
              flexWrap: 'nowrap',
              pb: 1,
            }}
          >
            {characterButtons.map(({ character, image }) => {
              const isSelected = runHistoryFilters[character] ?? false;

              return (
                <Box
                  key={character}
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                  }}
                >
                  <ButtonBase
                    onClick={() =>
                      setRunHistoryFilters((prev) => ({
                        ...prev,
                        [character]: !prev[character],
                      }))
                    }
                    sx={{
                      border: isSelected
                        ? '2px solid rgba(142,197,255,0.95)'
                        : '2px solid rgba(159,176,199,0.18)',
                      boxShadow: isSelected
                        ? '0 0 0 2px rgba(142,197,255,0.18)'
                        : 'none',
                      opacity: isSelected ? 1 : 0.55,
                      overflow: 'hidden',
                      transition:
                        'border-color 0.2s ease, opacity 0.2s ease, box-shadow 0.2s ease',
                      '&:hover': {
                        opacity: 1,
                        borderColor: 'rgba(142,197,255,0.75)',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={image}
                      alt={character}
                      sx={{
                        display: 'block',
                        width: '100%',
                        height: 52,
                        objectFit: 'contain',
                      }}
                    />
                  </ButtonBase>
                  <Button
                    size="small"
                    color="inherit"
                    onClick={() =>
                      setRunHistoryFilters(
                        Object.fromEntries(
                          characters.map((name) => [name, name === character])
                        ) as Record<string, boolean>
                      )
                    }
                    sx={{
                      mt: 0.5,
                      minWidth: 0,
                      px: 0,
                      py: 0.25,
                      fontSize: '0.7rem',
                      color: 'text.secondary',
                    }}
                  >
                    Only
                  </Button>
                </Box>
              );
            })}
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            {runHistoryDescription}
          </Typography>

          <Stack spacing={2.5}>
            {filteredRunHistoryItems.map(({ runId, character, image, playedAt, ascension }) => (
              <Box key={runId}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  {character} A{ascension} Run ({playedAt})
                </Typography>
                <Card sx={{ overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    image={image}
                    alt={`${character} A${ascension} Run`}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Card>
              </Box>
            ))}
          </Stack>
        </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default SlayTheSpire2EARecords;
