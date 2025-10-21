import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import { useTranslation } from '@hooks';
import * as styles from './index.styles';

const About = () => {
  const { t } = useTranslation();

  const highlights = [
    { icon: <CodeIcon />, label: 'about.highlights.experience' as const },
    { icon: <WorkIcon />, label: 'about.highlights.position' as const },
    { icon: <SchoolIcon />, label: 'about.highlights.certification' as const },
    { icon: <LanguageIcon />, label: 'about.highlights.languages' as const },
  ];

  const skills = ['Complex Problem Solving', 'Creativity', 'Logical Thinking', 'Agile Mindset', 'Teamwork'];

  return (
    <Box id="about" component="section">
      <Typography variant="h2" gutterBottom>
        {t('about.title')}
      </Typography>
      <Stack spacing={3}>
        <Paper elevation={0} sx={styles.introPaper}>
          <Typography variant="h5" gutterBottom sx={styles.greeting}>
            {t('about.greeting')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('about.intro')}
          </Typography>
          <Typography variant="body1">{t('about.passion')}</Typography>
        </Paper>
        <Box sx={styles.highlightsGrid}>
          {highlights.map((highlight) => (
            <Paper key={highlight.label} elevation={0} sx={styles.highlightPaper}>
              <Box sx={styles.highlightIconBox}>
                <Box sx={styles.iconColor}>{highlight.icon}</Box>
                <Typography variant="caption" color="text.secondary" sx={styles.caption}>
                  {t(highlight.label)}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
        <Box>
          <Typography variant="h6" gutterBottom sx={styles.skillsTitle}>
            {t('about.softSkills')}
          </Typography>
          <Box sx={styles.skillsContainer}>
            {skills.map((skill) => (
              <Chip key={skill} label={skill} variant="outlined" />
            ))}
          </Box>
        </Box>
        <Paper elevation={0} sx={styles.funFactPaper}>
          <Typography variant="body1" sx={styles.funFactText}>
            {t('about.funFact')}
          </Typography>
        </Paper>
      </Stack>
    </Box>
  );
};

export default About;
