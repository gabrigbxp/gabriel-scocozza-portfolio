import { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { useModalFullscreen } from '@hooks';
import type { DosFn, DosProps } from 'types/js-dos';
import * as styles from './index.styles';

declare const Dos: DosFn;

const DosPlayer = ({ bundle }: { bundle: string }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const dosRef = useRef<DosProps>(null);

  const initEmulators = async (url: string) => {
    try {
      if (mountRef.current && !dosRef.current) {
        dosRef.current = Dos(mountRef.current, {
          autoStart: true,
          url,
          mouseCapture: true,
          noCloud: true,
          thinSidebar: true,
        });
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Failed to initialize DOS emulator', err);
    }
  };

  useEffect(() => {
    initEmulators(location.origin + bundle);
    return () => {
      if (dosRef.current) {
        dosRef.current.stop();
        dosRef.current = null;
      }
    };
  }, [bundle]);

  const { isFullscreen, toggleFullscreen } = useModalFullscreen();

  return (
    <Box sx={styles.root}>
      <IconButton aria-label="fullscreen" size="small" sx={styles.fullscreenBtn} onClick={toggleFullscreen}>
        {isFullscreen ? <FullscreenExitIcon fontSize="small" /> : <FullscreenIcon fontSize="small" />}
      </IconButton>
      <Box ref={mountRef} sx={styles.canvasContainer} />
    </Box>
  );
};

export default DosPlayer;
