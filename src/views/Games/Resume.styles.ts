import type { Theme } from '@mui/material/styles'

export const container = (theme: Theme) => ({
  width: { xs: 1, md: `calc(50% - ${theme.spacing(1)})` },
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
  alignItems: 'center',
  p: 2,
})

export const imageWrapper = (theme: Theme) => ({
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: theme.shadows[4],
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[12],
  },
  '&:hover .play-icon': {
    color: theme.palette.success.light,
    transform: 'translate(-50%, -50%) scale(1.1)',
  },
})

export const playIconBox = (theme: Theme) => ({
  color: theme.palette.error.light,
  filter: 'drop-shadow(0 0 12px rgba(0, 0, 0, 0.8))',
  left: '50%',
  position: 'absolute',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  zIndex: 2,
})

export const playIcon = {
  fontSize: 80,
}
