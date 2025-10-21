import type { Theme } from '@mui/material/styles';

export const paper = {
  position: 'relative',
  p: 2,
  borderRadius: 2,
  bgcolor: 'background.default',
  borderColor: 'divider',
};

export const paperCollapsed = {
  bgcolor: 'transparent',
  borderColor: 'transparent',
};

export const toggleButton = (theme: Theme) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  cursor: 'pointer',
  zIndex: 1,
});

export const header = {
  fontWeight: 600,
};

export const content = {
  mt: 1,
};
