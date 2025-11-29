import { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Typography,
  Card,
  CardMedia,
  Container,
  CardContent,
  CardActionArea,
  Modal,
  Box,
  Grid,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Pagination,
  Stack,
} from '@mui/material';

type VideoItem = {
  id: number;
  title: string;
  youtubeVideoId: string;
  tags?: string[];
};

type VideoMenuBaseProps = {
  mainTitle: string;
  data: VideoItem[];
};

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 1280,
  bgcolor: 'black',
  borderRadius: 2,
  boxShadow: 24,
  p: 0,
  overflow: 'hidden',
};

const thumbnailLinkBuilder = (youtubeVideoId: string) =>
  `https://img.youtube.com/vi/${youtubeVideoId}/0.jpg`;

const videoLinkBuilder = (youtubeVideoId: string) =>
  `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`;

const ITEMS_PER_PAGE = 12;

const VideoMenuBase = ({ mainTitle, data }: VideoMenuBaseProps) => {
  const uniqueTags = useMemo(
    () => Array.from(new Set(data.flatMap(({ tags }) => tags ?? []))),
    [data]
  );

  const [filters, setFilters] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(uniqueTags.map((tag) => [tag, true]))
  );

  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [vId, setVId] = useState('');

  // keep filters in sync if tags change
  useEffect(() => {
    setFilters((prev) => {
      const next: Record<string, boolean> = {};
      uniqueTags.forEach((tag) => {
        next[tag] = prev[tag] ?? true;
      });
      return next;
    });
  }, [uniqueTags]);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => {
    setVId('');
    setOpen(false);
  }, []);

  const handleClick = useCallback(
    (youtubeVideoId: string) => {
      setVId(youtubeVideoId);
      handleOpen();
    },
    [handleOpen]
  );

  const handlePageChange = useCallback(
    (_event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    []
  );

  const handleTagCheckboxChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = event.target;
      setFilters((prev) => ({ ...prev, [name]: checked }));
      setPage(1);
    },
    []
  );

  const filtered = useMemo(
    () =>
      data
        .filter((item) => {
          if (!item.tags?.length) return true;
          return item.tags.some((tag) => filters[tag]);
        })
        .sort((a, b) => b.id - a.id),
    [data, filters]
  );

  const pageCount = Math.ceil(filtered.length / ITEMS_PER_PAGE);

  const paginated = useMemo(
    () =>
      filtered.slice(
        (page - 1) * ITEMS_PER_PAGE,
        page * ITEMS_PER_PAGE
      ),
    [filtered, page]
  );

  return (
    <Box display="flex" width="100%">
      <Box
        sx={{
          width: { xs: '100%', md: '20%' },
          p: 2,
          borderRight: { md: '1px solid rgba(255,255,255,0.1)' },
          borderBottom: { xs: '1px solid rgba(255,255,255,0.1)', md: 'none' },
        }}
      >
        <Typography variant="subtitle1" sx={{ mt: { xs: 1, md: 4 }, mb: 2 }}>
          Filter by tags
        </Typography>
        <FormGroup>
          {uniqueTags.map((tag) => (
            <FormControlLabel
              key={tag}
              label={tag}
              control={
                <Checkbox
                  sx={{ color: 'white' }}
                  name={tag}
                  checked={filters[tag] ?? false}
                  onChange={handleTagCheckboxChange}
                />
              }
            />
          ))}
        </FormGroup>
      </Box>

      <Box sx={{ width: { xs: '100%', md: '80%' }, p: 2 }}>
        <Container maxWidth="xl" disableGutters>
          <Typography
            align="center"
            variant="h4"
            sx={{ mt: 1, mb: 3, fontWeight: 600 }}
          >
            {mainTitle}
          </Typography>

          <Grid container spacing={2.5}>
            {paginated.map(({ youtubeVideoId, title }) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={youtubeVideoId}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    bgcolor: 'background.paper',
                  }}
                >
                  <CardActionArea onClick={() => handleClick(youtubeVideoId)}>
                    <Box
                      sx={{
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={thumbnailLinkBuilder(youtubeVideoId)}
                        alt={title}
                        sx={{
                          aspectRatio: '16 / 9',
                          objectFit: 'cover',
                          transition: 'transform 0.25s ease-out',
                          '&:hover': {
                            transform: 'scale(1.03)',
                          },
                        }}
                      />
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        gutterBottom
                        component="div"
                        variant="subtitle1"
                        sx={{ fontWeight: 500 }}
                      >
                        {title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="video-modal-title"
            aria-describedby="video-modal-description"
          >
            <Box sx={modalStyle}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  pt: '56.25%', // 16:9
                }}
              >
                {vId && (
                  <Box
                    component="iframe"
                    src={videoLinkBuilder(vId)}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 0,
                    }}
                  />
                )}
              </Box>
            </Box>
          </Modal>
        </Container>

        <Stack alignItems="center" mt={4}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={handlePageChange}
            color="primary"
            sx={{
              '& .MuiPaginationItem-root': {
                color: 'white',
              },
              '& .MuiPaginationItem-root:hover': {
                backgroundColor: 'rgba(255,255,255,0.08)',
              },
              '& .MuiPaginationItem-root.Mui-selected': {
                backgroundColor: (theme) => theme.palette.secondary.main,
                color: (theme) =>
                  theme.palette.getContrastText(theme.palette.secondary.main),
              },
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default VideoMenuBase;
