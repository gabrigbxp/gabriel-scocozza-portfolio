import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { GameModal, DosPlayer } from '@components'
import { useTranslation } from '@hooks'
import supaplexUrl from '@assets/games/supaplex.jsdos?url'
import * as styles from '../GameLayout.styles'
import InfoPanel from '../InfoPanel'
import infotron from './infotron.png'
import exit from './exit.png'

const SupaplexGame = (props: { isOpen: boolean; onClose: () => void }) => {
  const { t } = useTranslation()

  return (
    <GameModal isOpen={props.isOpen} onClose={props.onClose}>
      <Box sx={styles.container}>
        <Box sx={styles.info}>
          <InfoPanel title={t('games.supaplex.modal.title')}>
            <Typography variant="body2">
              {t('games.supaplex.modal.emulationNote')}{' '}
              <Link href="https://v8.js-dos.com/studio/" target="_blank" rel="noreferrer">
                {t('games.supaplex.modal.studio')}
              </Link>
              .
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              {t('games.supaplex.modal.howToPlay')}
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">{t('games.supaplex.modal.instructions.navigate')}</Typography>
              <Typography variant="body2">
                {t('games.supaplex.modal.instructions.objective')}{' '}
                <img src={infotron} alt="Infotron Icon" style={{ display: 'inline' }} />{' '}
                {t('games.supaplex.modal.instructions.objectiveContinued')}{' '}
                <img src={exit} alt="Exit Icon" style={{ display: 'inline' }} />.
              </Typography>
              <Typography variant="body2">{t('games.supaplex.modal.instructions.movement')}</Typography>
            </Stack>
          </InfoPanel>
        </Box>
        <Box sx={styles.player}>
          <DosPlayer bundle={supaplexUrl} />
        </Box>
      </Box>
    </GameModal>
  )
}

export default SupaplexGame
