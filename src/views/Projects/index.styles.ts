import type { SxProps, Theme } from '@mui/material/styles';

export const introText: SxProps<Theme> = { mb: 4 };

export const grid: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
  gap: 4,
};

export const card: SxProps<Theme> = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
};

export const cardContent: SxProps<Theme> = { flexGrow: 1 };

export const headerRow: SxProps<Theme> = {
  mb: 2,
};

export const featuresTitle: SxProps<Theme> = { mt: 2, mb: 1, fontWeight: 600 };

export const listItem: SxProps<Theme> = { py: 0.5 };

export const listItemIcon: SxProps<Theme> = { minWidth: 32 };

export const techBox: SxProps<Theme> = { mt: 2 };

export const techLabel: SxProps<Theme> = { fontWeight: 600 };

export const techText: SxProps<Theme> = { mt: 0.5 };

export const actions: SxProps<Theme> = { p: 2, pt: 0 };
