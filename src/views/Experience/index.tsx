import { Box, Typography, Chip, Stack, Link } from '@mui/material'
import WorkIcon from '@mui/icons-material/Work'
import BusinessIcon from '@mui/icons-material/Business'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PublicIcon from '@mui/icons-material/Public'
import { useTranslation } from '@hooks'
import experienceData from './experience.json'

const Experience = () => {
  const { t } = useTranslation()

  const formatPeriod = (start: string, end: string) => {
    const [year, month] = start.split('-').map(Number)
    const startDate = new Date(year, month - 1)
    const startMonth = startDate.toLocaleDateString(undefined, { month: 'short', year: 'numeric' })

    if (end === 'present') {
      return `${startMonth} - ${t('experience.present')}`
    }

    const [endYear, endMonth] = end.split('-').map(Number)
    const endDate = new Date(endYear, endMonth - 1)
    const endMonthStr = endDate.toLocaleDateString(undefined, { month: 'short', year: 'numeric' })
    return `${startMonth} - ${endMonthStr}`
  }

  const calculateDuration = (start: string, end: string) => {
    const startDate = new Date(start)
    const endDate = end === 'present' ? new Date() : new Date(end)

    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth())

    const years = Math.floor(months / 12)
    const remainingMonths = months % 12

    if (years > 0 && remainingMonths > 0) {
      return `${years} ${years === 1 ? t('experience.year') : t('experience.years')} ${remainingMonths} ${remainingMonths === 1 ? t('experience.month') : t('experience.months')}`
    }

    if (years > 0) {
      return `${years} ${years === 1 ? t('experience.year') : t('experience.years')}`
    }

    return `${remainingMonths} ${remainingMonths === 1 ? t('experience.month') : t('experience.months')}`
  }

  return (
    <Box component="section" id="experience" sx={{ py: 4 }}>
      <Typography variant="h2" gutterBottom>
        {t('experience.title')}
      </Typography>
      <Stack spacing={4} sx={{ mt: 3 }}>
        {experienceData.map((job) => (
          <Box
            key={job.id}
            sx={{
              p: 3,
              border: 1,
              borderColor: 'divider',
              borderRadius: 2,
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: 'primary.main',
                boxShadow: 2,
              },
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <WorkIcon color="primary" />
                <Typography variant="h5" component="h3">
                  {t(job.position as Parameters<typeof t>[0])}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <BusinessIcon fontSize="small" color="action" />
                {job.companyUrl ? (
                  <Link href={job.companyUrl} target="_blank" rel="noopener noreferrer" sx={{ textDecoration: 'none' }}>
                    <Typography variant="h6" color="primary.main">
                      {job.company}
                    </Typography>
                  </Link>
                ) : (
                  <Typography variant="h6" color="text.secondary">
                    {job.company}
                  </Typography>
                )}
              </Box>
              {job.internationalClient && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <PublicIcon fontSize="small" color="action" />
                  <Typography variant="body2" color="text.secondary">
                    {t(job.internationalClient as Parameters<typeof t>[0])}
                  </Typography>
                </Box>
              )}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
                <CalendarTodayIcon fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {formatPeriod(job.period.start, job.period.end)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ({calculateDuration(job.period.start, job.period.end)})
                </Typography>
                {job.additionalPeriod && (
                  <>
                    <Typography variant="body2" color="text.secondary">
                      +
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {formatPeriod(job.additionalPeriod.start, job.additionalPeriod.end)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ({calculateDuration(job.additionalPeriod.start, job.additionalPeriod.end)})
                    </Typography>
                  </>
                )}
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {job.location}
              </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                {t('experience.responsibilities')}:
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                {job.responsibilities.map((responsibility) => (
                  <Typography
                    component="li"
                    key={`${job.id}-${responsibility.slice(0, 30)}`}
                    variant="body2"
                    sx={{ mb: 0.5 }}
                  >
                    {t(responsibility as Parameters<typeof t>[0])}
                  </Typography>
                ))}
              </Box>
            </Box>
            <Box>
              <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 600 }}>
                {t('experience.technologies')}:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {job.technologies.map((tech) => (
                  <Chip key={`${job.id}-${tech}`} label={tech} size="small" variant="outlined" />
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

export default Experience
