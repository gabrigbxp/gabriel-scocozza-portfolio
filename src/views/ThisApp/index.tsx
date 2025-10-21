import { Box, Typography, Paper, Stack, Link } from '@mui/material';
import { useTranslation } from '@hooks';

const count = (() => {
  let counter = 0;
  return () => {
    counter += 1;
    return counter;
  };
})();

const ThisApp = () => {
  const { t } = useTranslation();

  const sections = [
    {
      id: 'design',
      title: t('thisApp.design.title'),
      content: t('thisApp.design.content'),
    },
    {
      id: 'materialUI',
      title: t('thisApp.materialUI.title'),
      content: t('thisApp.materialUI.content'),
    },
    {
      id: 'aiAssistance',
      title: t('thisApp.aiAssistance.title'),
      content: [t('thisApp.aiAssistance.githubCopilot'), t('thisApp.aiAssistance.chatGPT')],
    },
    {
      id: 'eslintConfig',
      title: t('thisApp.eslintConfig.title'),
      content: t('thisApp.eslintConfig.content'),
      link: {
        text: 'not-airbnb-eslint-config',
        url: 'https://www.npmjs.com/package/not-airbnb-eslint-config',
      },
    },
    {
      id: 'weatherAPI',
      title: t('thisApp.weatherAPI.title'),
      content: t('thisApp.weatherAPI.content'),
    },
    {
      id: 'jsDos',
      title: t('thisApp.jsDos.title'),
      content: t('thisApp.jsDos.content'),
    },
  ];

  return (
    <Box id="this-app" component="section">
      <Typography variant="h4" component="h2" gutterBottom>
        {t('thisApp.title')}
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        {t('thisApp.intro')}
      </Typography>
      <Stack spacing={3}>
        {sections.map((section) => (
          <Paper
            key={section.id}
            elevation={2}
            sx={{
              p: 3,
            }}
          >
            <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 500, color: 'primary.main' }}>
              {section.title}
            </Typography>
            {(Array.isArray(section.content) ? section.content : [section.content]).map((item) => (
              <Typography
                key={`${section.id}-body-${count()}`}
                variant="body1"
                sx={{ lineHeight: 1.7, whiteSpace: 'pre-line' }}
              >
                {item}
              </Typography>
            ))}
            {'link' in section && section.link && (
              <Link href={section.link.url} target="_blank" rel="noopener noreferrer" sx={{ fontWeight: 500 }}>
                {section.link.text}
              </Link>
            )}
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default ThisApp;
