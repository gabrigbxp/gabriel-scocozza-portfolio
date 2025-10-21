import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { GAME_LINKS } from '@constants';
import { useTranslation } from '@hooks';
import { HowWasAchivedGames } from '@components';
import Resume from './Resume';
import CoverSupaplex from './Supaplex/cover.jpg';
import CoverDooM from './DooM/cover.jpg';
import DooMGame from './DooM';
import SupaplexGame from './Supaplex';
import * as styles from './index.styles';

const gamesList = {
  supaplex: {
    Component: SupaplexGame,
    descriptionKey: 'games.supaplex.description',
    url: GAME_LINKS.supaplex.wikipedia,
    cover: {
      src: CoverSupaplex,
      alt: 'Cover of Supaplex game',
    },
  },
  doom: {
    Component: DooMGame,
    descriptionKey: 'games.doom.description',
    url: GAME_LINKS.doom.wikipedia,
    cover: {
      src: CoverDooM,
      alt: 'Cover of DooM game',
    },
  },
} as const;

const Games = () => {
  const { t } = useTranslation();
  const [hwaIsOpen, setHwaIsOpen] = useState(false);
  const [openGame, setOpenGame] = useState<keyof typeof gamesList | null>(null);

  const handleOpenGame = (gameKey: keyof typeof gamesList) => setOpenGame(gameKey);
  const handleCloseGame = () => setOpenGame(null);

  return (
    <Box component="section" id="games">
      <Typography variant="h2" gutterBottom>
        {t('games.title')}{' '}
        <Typography
          variant="body1"
          sx={{
            cursor: 'pointer',
            color: 'primary.main',
            display: 'inline',
          }}
          onClick={() => setHwaIsOpen(true)}
        >
          {t('games.howAchieved')}
        </Typography>
      </Typography>
      {hwaIsOpen && <HowWasAchivedGames isOpen={hwaIsOpen} onClose={() => setHwaIsOpen(false)} />}
      <Typography>{t('games.intro')}</Typography>
      <Box sx={styles.gamesList}>
        {Object.entries(gamesList).map(([key, { Component, descriptionKey, url, cover }]) => {
          const game = () => <Component isOpen={openGame === key} onClose={handleCloseGame} />;
          return (
            <Resume
              key={key}
              description={t(descriptionKey as any)}
              url={url}
              cover={cover}
              game={game}
              onOpenGame={() => handleOpenGame(key as keyof typeof gamesList)}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Games;
