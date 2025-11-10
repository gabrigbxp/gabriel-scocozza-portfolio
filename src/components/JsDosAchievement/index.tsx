import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import CodeIcon from '@mui/icons-material/Code'
import LanguageIcon from '@mui/icons-material/Language'
import SecurityIcon from '@mui/icons-material/Security'
import { useTranslation } from '@hooks'
import * as styles from './index.styles'

interface HowWasAchivedGamesProps {
  onClose: () => void
  isOpen: boolean
}

const HowWasAchivedGames = ({ isOpen, onClose }: HowWasAchivedGamesProps) => {
  const { t } = useTranslation()

  return (
    <Modal open={isOpen} onClose={onClose} data-testid="achievement-modal">
      <Box sx={styles.modal}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
            {t('games.achievement.title')}
          </Typography>
          <IconButton onClick={onClose} aria-label={t('games.achievement.close')} size="large">
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={styles.content}>
          <Box sx={styles.section}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <CodeIcon color="primary" />
              <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                {t('games.achievement.jsDos.title')}
              </Typography>
            </Box>
            <Typography variant="body1" paragraph>
              <Link href="https://js-dos.com/overview.html" target="_blank" rel="noopener noreferrer">
                js-dos
              </Link>{' '}
              {t('games.achievement.jsDos.description')}
            </Typography>
          </Box>
          <Box sx={styles.section}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <LanguageIcon color="secondary" />
              <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                {t('games.achievement.selfHosted.title')}
              </Typography>
            </Box>
            <Typography variant="body1" paragraph>
              {t('games.achievement.selfHosted.description')}
            </Typography>
            <Box component="ul" sx={styles.featureList}>
              <li>
                <Typography variant="body2">✓ {t('games.achievement.selfHosted.features.offline')}</Typography>
              </li>
              <li>
                <Typography variant="body2">✓ {t('games.achievement.selfHosted.features.noTracking')}</Typography>
              </li>
              <li>
                <Typography variant="body2">✓ {t('games.achievement.selfHosted.features.fastLoading')}</Typography>
              </li>
              <li>
                <Typography variant="body2">✓ {t('games.achievement.selfHosted.features.fullControl')}</Typography>
              </li>
            </Box>
          </Box>
          <Box sx={styles.section}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <SecurityIcon color="success" />
              <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                {t('games.achievement.legal.title')}
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
              {t('games.achievement.legal.description')}
            </Typography>
          </Box>
          <Box sx={styles.codeBlock}>
            <Typography variant="caption" sx={{ fontWeight: 'bold', display: 'block', mb: 1 }}>
              {t('games.achievement.technologies.title')}
            </Typography>
            <Typography variant="body2" component="div">
              • React + TypeScript
              <br />
              • js-dos v8.x (DOSBox WASM)
              <br />
              • Material-UI components
              <br />• Vite bundler for optimization
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
}

export default HowWasAchivedGames
