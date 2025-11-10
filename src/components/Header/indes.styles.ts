import type { Theme } from '@mui/material/styles'

export const appBar = {
  backdropFilter: 'saturate(1.2) blur(8px)',
  transition: 'background-color 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
  top: 0,
  zIndex: (theme: Theme) => theme.zIndex.appBar,
}

export const getAppBarBackgroundColor = (trigger: boolean, mode?: string, systemMode?: string) => {
  const resolved = mode === 'system' ? systemMode : mode
  return trigger ? (resolved === 'dark' ? 'rgba(15, 23, 42, 0.7)' : 'rgba(255, 255, 255, 0.7)') : 'transparent'
}

export const container = (trigger: boolean) => ({
  transition: 'padding 0.2s ease',
  py: trigger ? 0 : undefined,
})

export const toolbar = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  justifyContent: 'space-between',
}

export const logoContainer = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 1,
}

export const avatar = {
  width: 56,
  height: 56,
  img: {
    transform: 'scale(1.25)',
  },
}

export const logoTextBold = {
  fontWeight: 700,
}

export const mobileMenuButton = {
  display: { xs: 'flex', lg: 'none' },
  gap: 1,
  alignItems: 'center',
}

export const desktopMenu = {
  display: { xs: 'none', lg: 'flex' },
}

export const navButtonsStack = {
  display: { xs: 'none', md: 'flex' },
}

export const utilityButtonsStack = {
  display: { xs: 'none', lg: 'flex' },
}

export const navButton = {
  textTransform: 'none',
  borderRadius: 999,
  px: 1.5,
}

export const downloadButton = {
  textTransform: 'none',
  borderRadius: 999,
}

export const drawerBox = {
  width: 250,
  pt: 2,
}

export const downloadIcon = {
  mr: 2,
}

export const drawerToggles = {
  p: 2,
  justifyContent: 'center',
}
