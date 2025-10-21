import type { Theme } from '@mui/material/styles';

export const root = {
  position: 'relative',
  width: '100%',
  height: '100%',
};

export const canvasContainer = {
  width: '100%',
  height: '100%',
  '& > div': {
    maxWidth: '100%',
    maxHeight: '100%',
  },
};

export const fullscreenBtn = (theme: Theme) => ({
  position: 'absolute',
  right: theme.spacing(1),
  top: theme.spacing(1),
  zIndex: 2,
  '&:hover': { bgcolor: 'rgba(0,0,0,0.6)' },
  display: { xs: 'none', sm: 'inline-flex' },
});
