import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GitHubIcon from '@mui/icons-material/GitHub';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useTranslation } from '@hooks';
import * as styles from './index.styles';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 'libreqr',
      name: 'LibreQR',
      description: t('projects.libreqr.description'),
      features: [
        t('projects.libreqr.features.f0'),
        t('projects.libreqr.features.f1'),
        t('projects.libreqr.features.f2'),
        t('projects.libreqr.features.f3'),
        t('projects.libreqr.features.f4'),
      ],
      techStack: t('projects.libreqr.techStack'),
      github: 'https://github.com/gabrigbxp/LibreQR',
      demo: 'https://gabrigbxp.github.io/LibreQR/',
    },
    {
      id: 'not-airbnb-eslint',
      name: 'not-airbnb-eslint-config',
      description: t('projects.notAirbnbEslint.description'),
      features: [
        t('projects.notAirbnbEslint.features.f0'),
        t('projects.notAirbnbEslint.features.f1'),
        t('projects.notAirbnbEslint.features.f2'),
        t('projects.notAirbnbEslint.features.f3'),
        t('projects.notAirbnbEslint.features.f4'),
        t('projects.notAirbnbEslint.features.f5'),
      ],
      techStack: t('projects.notAirbnbEslint.techStack'),
      github: 'https://github.com/gabrigbxp/not-airbnb-eslint-config',
      npm: 'https://www.npmjs.com/package/not-airbnb-eslint-config',
    },
  ];

  return (
    <Box id="projects" component="section">
      <Typography variant="h2" gutterBottom>
        {t('projects.title')}
      </Typography>
      <Typography variant="body1" sx={styles.introText}>
        {t('projects.intro')}
      </Typography>
      <Box sx={styles.grid}>
        {projects.map((project) => (
          <Box key={project.id}>
            <Card elevation={3} sx={styles.card}>
              <CardContent sx={styles.cardContent}>
                <Box sx={styles.headerRow}>
                  <Typography variant="h5" component="h3">
                    {project.name}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Typography variant="subtitle2" sx={styles.featuresTitle}>
                  {t('projects.featuresTitle')}
                </Typography>
                <List dense disablePadding>
                  {project.features.map((feature) => (
                    <ListItem key={feature.substring(0, 30)} disablePadding sx={styles.listItem}>
                      <ListItemIcon sx={styles.listItemIcon}>
                        <CheckCircleIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
                <Box sx={styles.techBox}>
                  <Typography variant="caption" color="text.secondary" sx={styles.techLabel}>
                    {t('projects.techStackLabel')}:
                  </Typography>
                  <Typography variant="body2" sx={styles.techText}>
                    {project.techStack}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions sx={styles.actions}>
                <Button
                  size="small"
                  startIcon={<GitHubIcon />}
                  endIcon={<OpenInNewIcon />}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('projects.viewOnGitHub')}
                </Button>
                {project.npm && (
                  <Button
                    size="small"
                    color="secondary"
                    endIcon={<OpenInNewIcon />}
                    href={project.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('projects.npm')}
                  </Button>
                )}
                {project.demo && (
                  <Button
                    size="small"
                    color="secondary"
                    endIcon={<OpenInNewIcon />}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </Button>
                )}
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
