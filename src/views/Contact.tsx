import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { useTranslation } from '@hooks'
import { EXTERNAL_LINKS } from '@constants'

const Contact = () => {
  const { t } = useTranslation()

  const contactOptions = [
    {
      icon: <EmailIcon />,
      label: t('contact.email'),
      href: EXTERNAL_LINKS.email,
    },
    {
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      href: EXTERNAL_LINKS.linkedin,
    },
    {
      icon: <GitHubIcon />,
      label: 'GitHub',
      href: EXTERNAL_LINKS.github,
    },
  ]

  return (
    <Box id="contact" component="section">
      <Typography variant="h2" gutterBottom>
        {t('contact.title')}
      </Typography>
      <Paper
        elevation={2}
        sx={{
          p: 4,
          background: (theme) =>
            theme.palette.mode === 'dark'
              ? 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(156, 39, 176, 0.05) 100%)'
              : 'linear-gradient(135deg, rgba(25, 118, 210, 0.03) 0%, rgba(156, 39, 176, 0.03) 100%)',
        }}
      >
        <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
          {t('contact.intro')}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
          {contactOptions.map((option) => (
            <Button
              key={option.label}
              component="a"
              href={option.href}
              target={option.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={option.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              variant="contained"
              startIcon={option.icon}
            >
              {option.label}
            </Button>
          ))}
        </Box>
      </Paper>
    </Box>
  )
}

export default Contact
