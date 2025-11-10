import type { Theme } from '@mui/material/styles'

export const modal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 600, md: 700 },
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  outline: 'none',
}

export const header = {
  mb: 3,
  pb: 2,
  borderBottom: '2px solid',
  borderColor: 'primary.main',
}

export const content = {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
}

export const section = {
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
}

export const codeBlock = [
  {
    bgcolor: 'grey.100',
    color: 'grey.900',
    p: 2,
    borderRadius: 1,
    fontFamily: 'monospace',
    fontSize: '0.875rem',
    overflowX: 'auto',
    border: '1px solid',
    borderColor: 'divider',
  },
  (theme: Theme) =>
    theme.applyStyles('dark', {
      bgcolor: 'grey.900',
      color: 'grey.100',
    }),
]

export const featureList = {
  pl: 3,
  '& li': {
    mb: 1,
  },
}
