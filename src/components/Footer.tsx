import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTranslation } from '@hooks';
import { EXTERNAL_LINKS } from '@constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const startYear = 2025;
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        color: 'text.secondary',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Typography variant="body2">
          © {currentYear === startYear ? startYear : `${startYear} - ${currentYear}`} Gabriel Gustavo Scocozza
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2">{t('footer.builtWith')}</Typography>
          <Tooltip title={t('footer.viewSource')}>
            <IconButton
              component="a"
              href={EXTERNAL_LINKS.ghportfolio}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              aria-label={t('footer.viewSource')}
              sx={{
                color: 'text.secondary',
                '&:hover': {
                  color: 'primary.main',
                },
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Container>
    </Box>
  );
}
