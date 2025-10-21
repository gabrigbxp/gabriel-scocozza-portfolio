import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';
import SecurityIcon from '@mui/icons-material/Security';
import * as styles from './index.styles';

interface HowWasAchivedGamesProps {
  onClose: () => void;
  isOpen: boolean;
}

const HowWasAchivedGames = ({ isOpen, onClose }: HowWasAchivedGamesProps) => (
  <Modal open={isOpen} onClose={onClose} data-testid="achievement-modal">
    <Box sx={styles.modal}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          How was it achieved?
        </Typography>
        <IconButton onClick={onClose} aria-label="close" size="large">
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={styles.content}>
        <Box sx={styles.section}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <CodeIcon color="primary" />
            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
              js-dos Emulator
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            <Link href="https://js-dos.com/overview.html" target="_blank" rel="noopener noreferrer">
              js-dos
            </Link>{' '}
            is a powerful JavaScript library that enables running DOS and Windows 9x programs directly in modern
            browsers and Node.js environments. It provides a complete emulation layer that brings classic games to life
            without requiring any additional software installation.
          </Typography>
        </Box>
        <Box sx={styles.section}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <LanguageIcon color="secondary" />
            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
              Self-Hosted Implementation
            </Typography>
          </Box>
          <Typography variant="body1" paragraph>
            To ensure reliability and avoid dependency on external servers, this portfolio uses a fully self-hosted
            instance. Both the emulator engine and game files are served directly from this application, providing:
          </Typography>
          <Box component="ul" sx={styles.featureList}>
            <li>
              <Typography variant="body2">✓ Complete offline functionality</Typography>
            </li>
            <li>
              <Typography variant="body2">✓ No third-party tracking or analytics</Typography>
            </li>
            <li>
              <Typography variant="body2">✓ Fast loading times with optimized caching</Typography>
            </li>
            <li>
              <Typography variant="body2">✓ Full control over the gaming experience</Typography>
            </li>
          </Box>
        </Box>
        <Box sx={styles.section}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <SecurityIcon color="success" />
            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
              Legal Notice
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
            The games featured here are classic DOS titles that have been made freely available or are considered
            abandonware. They are presented for educational and demonstration purposes only, with no commercial intent.
            All games are adapted to run in modern browsers using open-source emulation technology.
          </Typography>
        </Box>
        <Box sx={styles.codeBlock}>
          <Typography variant="caption" sx={{ fontWeight: 'bold', display: 'block', mb: 1 }}>
            Technologies used:
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
);

export default HowWasAchivedGames;
