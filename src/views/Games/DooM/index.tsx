import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { GameModal, DosPlayer } from '@components'
import { useTranslation } from '@hooks'
import doomUrl from '@assets/games/doom.jsdos?url'
import * as styles from '../GameLayout.styles'
import InfoPanel from '../InfoPanel'

const DooMGame = (props: { isOpen: boolean; onClose: () => void }) => {
  const { t } = useTranslation()

  return (
    <GameModal isOpen={props.isOpen} onClose={props.onClose}>
      <Box sx={styles.container}>
        <Box sx={styles.info}>
          <InfoPanel title={t('games.doom.modal.title')}>
            <Typography variant="body2">
              {t('games.doom.modal.emulationNote')}{' '}
              <Link href="https://dos.zone/doom-dec-1993/" target="_blank" rel="noreferrer">
                {t('games.doom.modal.dosZone')}
              </Link>
              {t('games.doom.modal.optimized')}
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              {t('games.doom.modal.howToPlay')}
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">{t('games.doom.modal.instructions.move')}</Typography>
              <Typography variant="body2">{t('games.doom.modal.instructions.shoot')}</Typography>
              <Typography variant="body2">{t('games.doom.modal.instructions.doors')}</Typography>
            </Stack>
          </InfoPanel>
        </Box>
        <Box sx={styles.player}>
          <DosPlayer bundle={doomUrl} />
        </Box>
      </Box>
    </GameModal>
  )
}

export default DooMGame
