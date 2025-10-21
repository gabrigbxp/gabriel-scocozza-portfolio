import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { WEATHER_CONFIG } from '@constants';
import { useTranslation, useWeather } from '@hooks';
import { useAppSelector } from '@hooks/useRedux';
import type { WeatherForecastDay } from 'services/weather';
import * as styles from './index.styles';

type TemperatureUnit = 'C' | 'F';

const Weather = () => {
  const { t } = useTranslation();
  const locale = useAppSelector((state) => state.locale.current);
  const [unit, setUnit] = useState<TemperatureUnit>(locale === 'es' ? 'C' : 'F');
  const { fetchByCoords, fetchByIp, isLoading, error, data } = useWeather();

  const days = useMemo(() => (data?.forecast?.forecastday ?? []).slice(0, WEATHER_CONFIG.forecastDays), [data]);

  const getTemp = (tempC: number, tempF: number) => Math.round(unit === 'C' ? tempC : tempF);

  const fetchWeather = async (useGeo: boolean) => {
    if (useGeo && navigator.geolocation) {
      const pos = await new Promise<GeolocationPosition>((res, rej) => {
        navigator.geolocation.getCurrentPosition(res, rej, {
          enableHighAccuracy: WEATHER_CONFIG.geolocationHighAccuracy,
          timeout: WEATHER_CONFIG.geolocationTimeout,
        });
      });
      fetchByCoords(pos.coords.latitude, pos.coords.longitude, WEATHER_CONFIG.forecastDays);
    } else {
      fetchByIp(WEATHER_CONFIG.forecastDays);
    }
  };

  return (
    <Box id="weather" component="section">
      <Typography variant="h2" gutterBottom>
        {t('weather.title')}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {t('weather.description')}
      </Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} alignItems={{ xs: 'stretch', sm: 'center' }}>
        <ToggleButtonGroup
          value={unit}
          exclusive
          onChange={(_e, newUnit) => {
            if (newUnit !== null) setUnit(newUnit);
          }}
          size="small"
          aria-label={t('weather.unit')}
        >
          <ToggleButton value="C" aria-label={t('weather.celsius')}>
            {t('weather.celsius')}
          </ToggleButton>
          <ToggleButton value="F" aria-label={t('weather.fahrenheit')}>
            {t('weather.fahrenheit')}
          </ToggleButton>
        </ToggleButtonGroup>
        <Stack direction="row" spacing={1}>
          <Button
            sx={{
              whiteSpace: 'nowrap',
            }}
            variant="contained"
            disabled={isLoading}
            onClick={() => fetchWeather(true)}
          >
            {t('weather.useGeolocation')}
          </Button>
          <Button
            sx={{
              whiteSpace: 'nowrap',
            }}
            variant="outlined"
            disabled={isLoading}
            onClick={() => fetchWeather(false)}
          >
            {t('weather.detectByIP')}
          </Button>
        </Stack>
      </Stack>
      <Box sx={styles.controlsStack}>
        {isLoading && (
          <Stack direction="row" spacing={1} alignItems="center">
            <CircularProgress size={20} />
            <Typography variant="body2">{t('weather.loading')}</Typography>
          </Stack>
        )}
        {error && <Alert severity="error">{error}</Alert>}
      </Box>
      {data && (
        <Box sx={styles.resultsBox}>
          <Typography variant="subtitle1" gutterBottom>
            {data.location.name}, {data.location.region} - {data.location.country}
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <img src={data.current.condition.icon} alt={data.current.condition.text} />
            <Typography variant="h4">
              {getTemp(data.current.temp_c, data.current.temp_f)}°{unit}
            </Typography>
            <Typography variant="body2">
              {t('weather.feelsLike', {
                temp: getTemp(data.current.feelslike_c, data.current.feelslike_f),
                unit,
              })}
            </Typography>
          </Stack>
          <Divider sx={styles.divider} />
          <Typography variant="subtitle2" gutterBottom>
            {t('weather.next3Days')}
          </Typography>
          <Box sx={styles.forecastContainer}>
            {days.slice(1).map((d: WeatherForecastDay) => (
              <Box key={d.date} sx={styles.forecastCard}>
                <Typography variant="body2">{d.date}</Typography>
                <img src={d.day.condition.icon} alt={d.day.condition.text} />
                <Typography variant="body2">
                  {t('weather.max', { temp: getTemp(d.day.maxtemp_c, d.day.maxtemp_f), unit })}
                </Typography>
                <Typography variant="body2">
                  {t('weather.min', { temp: getTemp(d.day.mintemp_c, d.day.mintemp_f), unit })}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Weather;
