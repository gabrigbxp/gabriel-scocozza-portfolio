import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import type { TranslationKey } from '@i18n';
import { iconMap } from '@utils';
import { useTranslation } from '@hooks';
import stack from './stack.json';
import * as styles from './index.styles';

type TechStackItemKey = keyof TranslationKey['techstack']['items'];

const TechStack = () => {
  const { t } = useTranslation();

  return (
    <Box id="techstack" component="section">
      <Typography variant="h2" gutterBottom>
        {t('techstack.title')}{' '}
        <Typography variant="caption" sx={styles.counter}>
          ({t('techstack.itemsCount', { count: stack.length })})
        </Typography>
      </Typography>
      <Box
        sx={styles.container}
        onScroll={(e) => {
          const el = e.currentTarget;
          const atTheEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;
          const techstack = document.querySelector('#techstack')!;
          if (atTheEnd) techstack.classList.add('scrolled');
          else techstack.classList.remove('scrolled');
        }}
      >
        {stack.map((card) => {
          const isActive = card.status === 'active';
          const cardKey = card.key as TechStackItemKey;
          const description = t(`techstack.items.${cardKey}.description` as any);
          const cardName = (
            <Typography variant="h5" sx={styles.cardName}>
              {card.name}
            </Typography>
          );

          return (
            <Paper key={card.name} elevation={3} sx={styles.card}>
              <Box sx={styles.cardHeader}>
                <Box sx={styles.iconBox}>
                  <img src={iconMap[card.icon]} alt={card.name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Box>
                {card.url ? (
                  <Link href={card.url} target="_blank" rel="noopener" sx={styles.cardLink}>
                    {cardName}
                  </Link>
                ) : (
                  cardName
                )}
              </Box>
              <Box sx={styles.chipBox}>
                <Chip
                  label={isActive ? t('techstack.activelyUse') : t('techstack.learned')}
                  color={isActive ? 'primary' : 'default'}
                  variant={isActive ? 'filled' : 'outlined'}
                  sx={styles.chip}
                />
                {card.years && (
                  <Typography variant="subtitle2" sx={{ fontSize: 12 }}>
                    {card.years} {card.years > 1 ? t('techstack.years') : t('techstack.year')}
                  </Typography>
                )}
              </Box>
              <Typography variant="body1">{description}</Typography>
              {card.related &&
                Object.entries(card.related).map(([category, items]) => {
                  const categoryKey = `techstack.items.${cardKey}.related.${category}` as any;
                  const categoryLabel = t(categoryKey);
                  return (
                    <Typography key={category} variant="body2">
                      {categoryLabel}:{' '}
                      {(items as Array<{ name: string; url?: string }>).map((item, index) => (
                        <span key={item.name}>
                          {item.url ? (
                            <Link href={item.url} target="_blank" rel="noopener">
                              {item.name}
                            </Link>
                          ) : (
                            item.name
                          )}
                          {index < items.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </Typography>
                  );
                })}
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
};

export default TechStack;
