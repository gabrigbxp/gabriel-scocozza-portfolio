import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { GameModal, DosPlayer } from '@components';
import doomUrl from '@assets/games/doom.jsdos?url';
import * as styles from '../GameLayout.styles';
import InfoPanel from '../InfoPanel';

const DooMGame = (props: { isOpen: boolean; onClose: () => void }) => (
  <GameModal isOpen={props.isOpen} onClose={props.onClose}>
    <Box sx={styles.container}>
      <Box sx={styles.info}>
        <InfoPanel title="DooM (1993)">
          <Typography variant="body2">
            This emulation is the same as{' '}
            <Link href="https://dos.zone/doom-dec-1993/" target="_blank" rel="noreferrer">
              DOS Zone
            </Link>
            . It’s optimized to provide a modern experience.
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
            How to play
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body2">WASD to move</Typography>
            <Typography variant="body2">Left click to shoot</Typography>
            <Typography variant="body2">Space or double right click to open doors</Typography>
          </Stack>
        </InfoPanel>
      </Box>
      <Box sx={styles.player}>
        <DosPlayer bundle={doomUrl} />
      </Box>
    </Box>
  </GameModal>
);

export default DooMGame;
