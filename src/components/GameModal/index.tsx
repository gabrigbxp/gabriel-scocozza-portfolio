import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import type { ReactNode } from 'react';
import useModalFullscreen from '@hooks/useModalFullscreen';
import * as styles from './index.styles';

interface GameModalProps {
  onClose: () => void;
  children: ReactNode;
  maxWidth?: number | string;
  isOpen: boolean;
}

const GameModalBody = ({ children }: { children: ReactNode }) => {
  const { isFullscreen } = useModalFullscreen();
  return <Box sx={[styles.modal, isFullscreen && styles.modalFullscreen]}>{children}</Box>;
};

const GameModal = ({ isOpen, onClose, children }: GameModalProps) => (
  <Modal open={isOpen} onClose={onClose}>
    <GameModalBody>{children}</GameModalBody>
  </Modal>
);

export default GameModal;
