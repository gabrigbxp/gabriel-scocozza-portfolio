// WeatherAPI client using fetch
// Docs: https://www.weatherapi.com/docs/

export interface WeatherCondition {
  text: string;
  icon: string; // URL
  code: number;
}

export interface WeatherCurrent {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  condition: WeatherCondition;
  wind_kph: number;
  wind_dir: string;
  cloud: number;
  humidity: number;
  feelslike_c: number;
}

export interface WeatherDay {
  maxtemp_c: number;
  mintemp_c: number;
  avgtemp_c: number;
  maxwind_kph: number;
  avghumidity: number;
  condition: WeatherCondition;
}

export interface WeatherForecastDay {
  date: string; // YYYY-MM-DD
  date_epoch: number;
  day: WeatherDay;
}

export interface WeatherLocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime: string;
}

export interface WeatherForecastResponse {
  location: WeatherLocation;
  current: WeatherCurrent;
  forecast: {
    forecastday: WeatherForecastDay[];
  };
}

const BASE = 'https://api.weatherapi.com/v1';

const fetchJson = async <T>(url: string): Promise<T> => {
  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!res.ok) {
    let detail = '';
    try {
      const body = await res.json();
      detail = body?.error?.message || JSON.stringify(body);
    } catch (e) {
      void e;
    }
    throw new Error(`WeatherAPI error ${res.status}: ${detail}`);
  }
  return res.json() as Promise<T>;
};

const buildForecastUrl = (apiKey: string, q: string, days = 3, lang = 'en') => {
  const p = new URLSearchParams({ key: apiKey, q, days: String(days), aqi: 'no', alerts: 'no', lang });
  return `${BASE}/forecast.json?${p.toString()}`;
};

const getForecastByQuery = async (apiKey: string, q: string, days = 3, lang = 'en') => {
  return fetchJson<WeatherForecastResponse>(buildForecastUrl(apiKey, q, days, lang));
};

export const getForecastByCoords = async (apiKey: string, lat: number, lon: number, days = 3, lang = 'en') => {
  return getForecastByQuery(apiKey, `${lat},${lon}`, days, lang);
};

export const getForecastAutoIp = async (apiKey: string, days = 3, lang = 'en') => {
  return getForecastByQuery(apiKey, 'auto:ip', days, lang);
};
