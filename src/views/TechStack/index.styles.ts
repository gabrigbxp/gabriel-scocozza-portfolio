import type { Theme } from '@mui/material/styles'

export const counter = () => ({
  display: { xs: 'inline', sm: 'none' },
})

export const container = (theme: Theme) => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  gap: 2,
  overflowX: 'auto',
  pb: 2,
  height: `calc(${theme.spacing(49)} * 2 + ${theme.spacing(6)})`,
})

export const chipBox = {
  display: 'flex',
  flexDirection: 'row',
  gap: 1,
  flexWrap: 'wrap',
  alignItems: 'end',
}

export const card = (theme: Theme) => ({
  p: 3,
  display: 'flex',
  flexDirection: 'column',
  height: `calc(50% - ${theme.spacing(1)})`,
  gap: 1,
  maxWidth: 350,
})

export const cardHeader = {
  display: 'flex',
  flexDirection: 'row',
  gap: 1,
  alignItems: 'center',
}

export const iconBox = (theme: Theme) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  alignContent: 'center',
})

export const cardLink = {
  textDecoration: 'none',
}

export const cardName = {
  fontWeight: 'bold',
}

export const chip = {
  fontWeight: 'bold',
  width: 'fit-content',
}
