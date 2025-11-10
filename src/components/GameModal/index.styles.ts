import type { Theme } from '@mui/material/styles'

export const modal = (theme: Theme) => ({
  bgcolor: 'background.paper',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: 960,
  height: '90vh',
  maxHeight: 720,
  borderRadius: 2,
  overflow: 'hidden',
  [theme.breakpoints.down('sm')]: {
    width: '95vw',
    height: '80vh',
    maxWidth: 'none',
    maxHeight: 'none',
  },
})

export const modalFullscreen = {
  maxWidth: 'none',
  maxHeight: 'none',
}
