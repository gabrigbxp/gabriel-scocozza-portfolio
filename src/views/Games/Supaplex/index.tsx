import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { GameModal, DosPlayer } from '@components'
import supaplexUrl from '@assets/games/supaplex.jsdos?url'
import * as styles from '../GameLayout.styles'
import InfoPanel from '../InfoPanel'
import infotron from './infotron.png'
import exit from './exit.png'

const SupaplexGame = (props: { isOpen: boolean; onClose: () => void }) => (
  <GameModal isOpen={props.isOpen} onClose={props.onClose}>
    <Box sx={styles.container}>
      <Box sx={styles.info}>
        <InfoPanel title="Supaplex">
          <Typography variant="body2">
            This emulation was prepared by myself using{' '}
            <Link href="https://v8.js-dos.com/studio/" target="_blank" rel="noreferrer">
              js-dos studio
            </Link>
            .
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            How to play
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body2">
              Navigate menus with the mouse; start the selected level with OK or the Space bar.
            </Typography>
            <Typography variant="body2">
              Eat enough "infotrons" <img src={infotron} alt="Infotron Icon" style={{ display: 'inline' }} /> to
              complete the level and reach the exit <img src={exit} alt="Exit Icon" style={{ display: 'inline' }} />.
            </Typography>
            <Typography variant="body2">
              Use arrow keys to move. Press Space to eat without moving or to place bomb floppies.
            </Typography>
          </Stack>
        </InfoPanel>
      </Box>
      <Box sx={styles.player}>
        <DosPlayer bundle={supaplexUrl} />
      </Box>
    </Box>
  </GameModal>
)

export default SupaplexGame
