import { useCallback } from 'react';
import { setError, setData, setLoading } from 'store/weather';
import { getForecastAutoIp, getForecastByCoords, type WeatherForecastResponse } from 'services/weather';
import { useAppDispatch, useAppSelector } from './useRedux';

const useWeather = (apiKey: string) => {
  const dispatch = useAppDispatch();
  const { isLoading, error, data } = useAppSelector((store) => store.weather);
  const updateLoading = useCallback((loading: boolean) => dispatch(setLoading(loading)), [dispatch]);
  const updateError = useCallback((e: string | null) => dispatch(setError(e)), [dispatch]);
  const updateData = useCallback((d: WeatherForecastResponse | null) => dispatch(setData(d)), [dispatch]);

  const canQuery = apiKey.trim().length > 0;

  const handleFetch = useCallback(
    async (fetchFn: () => Promise<WeatherForecastResponse>) => {
      updateLoading(true);
      fetchFn()
        .then((resp) => {
          updateData(resp);
          updateError(null);
        })
        .catch((e: any) => {
          updateError(e?.message ?? 'Failed to load weather');
          updateData(null);
        })
        .finally(() => {
          updateLoading(false);
        });
    },
    [updateData, updateError, updateLoading],
  );

  const fetchByCoords = useCallback(
    (lat: number, lon: number, days = 3, lang = 'en') =>
      handleFetch(() => getForecastByCoords(apiKey, lat, lon, days, lang)),
    [apiKey, handleFetch],
  );

  const fetchByIp = useCallback(
    (days = 3, lang = 'en') => handleFetch(() => getForecastAutoIp(apiKey, days, lang)),
    [apiKey, handleFetch],
  );

  return {
    isLoading,
    error,
    data,
    canQuery,
    fetchByCoords,
    fetchByIp,
  };
};

export default useWeather;
