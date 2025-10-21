import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { WeatherForecastResponse } from 'services/weather';

export interface WeatherState {
  apiKey: string;
  isLoading: boolean;
  error: string | null;
  data: WeatherForecastResponse | null;
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    apiKey: '',
    isLoading: false,
    error: null,
    data: null,
  } as WeatherState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => ({ ...state, isLoading: action.payload }),
    setError: (state, action: PayloadAction<string | null>) => ({ ...state, error: action.payload }),
    setData: (state, action: PayloadAction<WeatherForecastResponse | null>) => ({ ...state, data: action.payload }),
  },
});

export const { setLoading, setError, setData } = weatherSlice.actions;

export default weatherSlice.reducer;
