import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { useColorScheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import MenuIcon from '@mui/icons-material/Menu'
import DownloadIcon from '@mui/icons-material/Download'
import { useEffect, useState } from 'react'
import { useTranslation } from '@hooks'
import { HEADER_CONFIG, SCROLL_OFFSET, SECTIONS } from '@constants'
import me from '@assets/profile/me.jpg'
import LocaleToggle from '../LocaleToggle'
import ThemeToggle from '../ThemeToggle'
import * as styles from './indes.styles'

const Header = () => {
  const [trigger, setTrigger] = useState(false)
  const [active, setActive] = useState<string>()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { mode, systemMode } = useColorScheme()
  const { t } = useTranslation()

  useEffect(() => {
    let timeoutId: number | undefined
    const HYSTERESIS = 40 // threshold zone to prevent flickering

    const handleScroll = () => {
      const { scrollY } = window
      const threshold = HEADER_CONFIG.scrollTriggerThreshold

      if (trigger) {
        if (scrollY < threshold - HYSTERESIS) {
          setTrigger(false)
        }
      } else {
        if (scrollY > threshold + HYSTERESIS) {
          setTrigger(true)
        }
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [trigger])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setDrawerOpen(false)
  }

  useEffect(() => {
    const handler = () => {
      let current: string = SECTIONS[0].id
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= HEADER_CONFIG.activeDetectionOffset && rect.bottom >= HEADER_CONFIG.activeDetectionOffset) {
            current = id
            break
          }
        }
      }
      setActive(current)
    }
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={trigger ? 6 : 0}
        sx={{
          ...styles.appBar,
          backgroundColor: styles.getAppBarBackgroundColor(trigger, mode, systemMode),
        }}
      >
        <Container maxWidth="xl" sx={styles.container(trigger)}>
          <Toolbar disableGutters sx={styles.toolbar}>
            <Box sx={styles.logoContainer}>
              <Avatar alt={t('header.avatarAlt')} src={me} sx={styles.avatar} />
              <Typography variant="h6" component="span">
                {t('header.hi')}{' '}
                <Typography variant="h6" component="span" sx={styles.logoTextBold}>
                  Gabo
                </Typography>
              </Typography>
            </Box>
            <Stack direction="row" spacing={1} sx={styles.navButtonsStack}>
              {SECTIONS.map(({ id, label }) => (
                <Button
                  key={id}
                  color={active === id ? 'primary' : 'inherit'}
                  variant={active === id ? 'contained' : 'text'}
                  size="small"
                  sx={styles.navButton}
                  onClick={() => scrollToSection(id)}
                >
                  {t(label)}
                </Button>
              ))}
            </Stack>
            <Stack direction="row" spacing={1} sx={styles.utilityButtonsStack}>
              <Button
                size="small"
                variant="outlined"
                startIcon={<DownloadIcon />}
                href={`${import.meta.env.BASE_URL}cv.pdf`}
                sx={styles.downloadButton}
                target="_blank"
              >
                {t('header.downloadCV')}
              </Button>
              <LocaleToggle />
              <ThemeToggle />
            </Stack>
            <Box sx={styles.mobileMenuButton}>
              <IconButton onClick={() => setDrawerOpen(true)} color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={styles.drawerBox} role="presentation">
          <List sx={{ display: { md: 'none' } }}>
            {SECTIONS.map(({ id, label }) => (
              <ListItem key={id} disablePadding>
                <ListItemButton selected={active === id} onClick={() => scrollToSection(id)}>
                  <ListItemText primary={t(label)} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ display: { md: 'none' } }} />
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href={`${import.meta.env.BASE_URL}cv.pdf`} target="_blank">
                <DownloadIcon sx={styles.downloadIcon} />
                <ListItemText primary={t('header.downloadCV')} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <Stack direction="row" spacing={1} sx={styles.drawerToggles}>
            <LocaleToggle />
            <ThemeToggle />
          </Stack>
        </Box>
      </Drawer>
    </>
  )
}

export default Header
