import { useMemo, useState, type ReactNode } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Compress from '@mui/icons-material/Compress';
import Expand from '@mui/icons-material/Expand';
import { getMuiSpacingPx } from '@utils';
import * as styles from './InfoPanel.styles';

interface InfoPanelProps {
  title?: ReactNode;
  children: ReactNode;
}

const InfoPanel = ({ title, children }: InfoPanelProps) => {
  const [show, setShow] = useState(true);
  const collapsedSize = useMemo(() => getMuiSpacingPx(6), []);
  const Toggle = show ? Compress : Expand;

  return (
    <Collapse in={show} collapsedSize={collapsedSize}>
      <Paper variant="outlined" sx={[styles.paper, !show && styles.paperCollapsed]}>
        <Toggle onClick={() => setShow(!show)} sx={styles.toggleButton} />
        {title && (
          <Typography component="h3" variant="subtitle1" sx={styles.header}>
            {title}
          </Typography>
        )}
        <Box sx={styles.content}>{children}</Box>
      </Paper>
    </Collapse>
  );
};

export default InfoPanel;
