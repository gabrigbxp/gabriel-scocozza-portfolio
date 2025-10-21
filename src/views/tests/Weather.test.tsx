import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createPreloadedState, renderWithProviders } from '@test/test-utils';
import type { Locale } from '@store/locale';
import type { WeatherForecastResponse } from '@services/weather';
import Weather from '../Weather/index';

const mockWeatherData: WeatherForecastResponse = {
  location: {
    name: 'Buenos Aires',
    region: 'Buenos Aires',
    country: 'Argentina',
    lat: 0,
    lon: 0,
    tz_id: '',
    localtime: '',
  },
  current: {
    temp_c: 28.5,
    temp_f: 83.3,
    feelslike_c: 30.2,
    feelslike_f: 86.4,
    condition: {
      text: 'Sunny',
      icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
      code: 0,
    },
    last_updated_epoch: 0,
    last_updated: '',
    wind_kph: 0,
    wind_dir: '',
    cloud: 0,
    humidity: 0,
  },
  forecast: {
    forecastday: [
      {
        date: '2025-01-15',
        day: {
          maxtemp_c: 30,
          maxtemp_f: 86,
          mintemp_c: 22,
          mintemp_f: 71.6,
          condition: {
            text: 'Sunny',
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
            code: 0,
          },
          avgtemp_c: 0,
          avgtemp_f: 0,
          maxwind_kph: 0,
          avghumidity: 0,
        },
        date_epoch: 0,
      },
      {
        date: '2025-01-16',
        day: {
          maxtemp_c: 28,
          maxtemp_f: 82.4,
          mintemp_c: 20,
          mintemp_f: 68,
          condition: {
            text: 'Partly cloudy',
            icon: '//cdn.weatherapi.com/weather/64x64/day/116.png',
            code: 0,
          },
          avgtemp_c: 0,
          avgtemp_f: 0,
          maxwind_kph: 0,
          avghumidity: 0,
        },
        date_epoch: 0,
      },
      {
        date: '2025-01-17',
        day: {
          maxtemp_c: 26,
          maxtemp_f: 78.8,
          mintemp_c: 19,
          mintemp_f: 66.2,
          condition: {
            text: 'Overcast',
            icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
            code: 0,
          },
          avgtemp_c: 0,
          avgtemp_f: 0,
          maxwind_kph: 0,
          avghumidity: 0,
        },
        date_epoch: 0,
      },
      {
        date: '2025-01-18',
        day: {
          maxtemp_c: 26,
          maxtemp_f: 78.8,
          mintemp_c: 19,
          mintemp_f: 66.2,
          condition: {
            text: 'Cloudy',
            icon: '//cdn.weatherapi.com/weather/64x64/day/122.png',
            code: 0,
          },
          avgtemp_c: 0,
          avgtemp_f: 0,
          maxwind_kph: 0,
          avghumidity: 0,
        },
        date_epoch: 0,
      },
    ],
  },
};

const mockGeolocation = {
  getCurrentPosition: vi.fn(),
  watchPosition: vi.fn(),
  clearWatch: vi.fn(),
};

const preloadedStateEn = createPreloadedState({
  locale: {
    current: 'en' as Locale,
  },
});

const preloadedStateMockedData = createPreloadedState({
  locale: {
    current: 'en',
  },
  weather: {
    isLoading: true,
    error: '',
    data: mockWeatherData,
  },
});

describe('Weather', () => {
  beforeAll(() => {
    Object.defineProperty(global.navigator, 'geolocation', {
      writable: true,
      value: mockGeolocation,
    });
  });

  afterAll(() => {
    vi.clearAllMocks();
  });

  describe('rendering', () => {
    let container: HTMLElement;
    beforeEach(() => {
      const { container: c } = renderWithProviders(<Weather />, {
        preloadedState: createPreloadedState(preloadedStateEn),
      });
      container = c;
    });

    it('should render weather section', () => {
      const section = container.querySelector('section#weather');
      expect(section).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /weather/i })).toBeInTheDocument();
      expect(screen.getByText(/real-time weather/i)).toBeInTheDocument();
    });

    it('should not display weather results when data is null', () => {
      expect(screen.queryByText(/next 3 days/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/buenos aires/i)).not.toBeInTheDocument();
    });
  });

  describe('API', () => {
    it('should display loading indicator and disabled buttons when fetching weather', () => {
      renderWithProviders(<Weather />, {
        preloadedState: {
          locale: { current: 'en' },
          weather: {
            isLoading: true,
            error: null,
            data: null,
          },
        },
      });

      expect(screen.getByRole('progressbar')).toBeInTheDocument();
      expect(screen.getByText(/loading/i)).toBeInTheDocument();

      const geoButton = screen.getByRole('button', { name: /geolocation/i });
      const ipButton = screen.getByRole('button', { name: /detect.*ip/i });
      expect(geoButton).toBeDisabled();
      expect(ipButton).toBeDisabled();
    });
  });

  describe('error handling', () => {
    it('should display error message when fetch fails, with error severity', () => {
      const errorMessage = 'Failed to fetch weather data';
      const { container } = renderWithProviders(<Weather />, {
        preloadedState: {
          locale: { current: 'en' },
          weather: {
            isLoading: true,
            error: errorMessage,
            data: null,
          },
        },
      });

      const alert = screen.getByRole('alert');
      expect(alert).toBeInTheDocument();
      expect(alert).toHaveTextContent(errorMessage);

      const alertSeverity = container.querySelector('.MuiAlert-standardError');
      expect(alert).toBe(alertSeverity);
    });
  });

  describe('weather data display', () => {
    beforeEach(() => {
      renderWithProviders(<Weather />, {
        preloadedState: preloadedStateMockedData,
      });
    });

    it('should display location information', () => {
      expect(screen.getByText(/buenos aires.*argentina/i)).toBeInTheDocument();
    });

    it('should display current temperature', () => {
      expect(screen.getByText(/83°f/i)).toBeInTheDocument();
    });

    it('should display feels like temperature', () => {
      expect(screen.getByText(/feels like.*86/i)).toBeInTheDocument();
    });

    it('should display current weather icon', () => {
      const weatherIcon = screen.getByAltText(/sunny/i);
      expect(weatherIcon).toBeInTheDocument();
      expect(weatherIcon).toHaveAttribute('src', expect.stringContaining('113.png'));
    });

    it('should display forecast section title', () => {
      expect(screen.getByText(/next 3 days/i)).toBeInTheDocument();
    });

    it('should display forecast cards', () => {
      expect(screen.getByText('2025-01-16')).toBeInTheDocument();
      expect(screen.getByText('2025-01-17')).toBeInTheDocument();
      expect(screen.getByText('2025-01-18')).toBeInTheDocument();
    });

    it('should display max and min temperatures in forecast', () => {
      expect(screen.getByText(/max.*82/i)).toBeInTheDocument();
      expect(screen.getByText(/min.*68/i)).toBeInTheDocument();
    });

    it('should display forecast weather icons', () => {
      const partlyCloudyIcon = screen.getByAltText(/partly cloudy/i);
      expect(partlyCloudyIcon).toBeInTheDocument();
      expect(partlyCloudyIcon).toHaveAttribute('src', expect.stringContaining('116.png'));
    });
  });

  describe('interactions', () => {
    it('should call geolocation API when geolocation button is clicked', async () => {
      const user = userEvent.setup();
      renderWithProviders(<Weather />, {
        preloadedState: createPreloadedState(preloadedStateEn),
      });

      const geoButton = screen.getByRole('button', { name: /geolocation/i });
      await user.click(geoButton);

      await waitFor(() => {
        expect(mockGeolocation.getCurrentPosition).toHaveBeenCalled();
      });
    });
  });

  describe('accessibility', () => {
    it('should use semantic section element', () => {
      const { container } = renderWithProviders(<Weather />, {
        preloadedState: createPreloadedState(preloadedStateEn),
      });

      const section = container.querySelector('section#weather');
      expect(section).toBeInTheDocument();
    });

    it('should have descriptive button text', () => {
      renderWithProviders(<Weather />, {
        preloadedState: createPreloadedState(preloadedStateEn),
      });

      expect(screen.getByRole('button', { name: /geolocation/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /detect.*ip/i })).toBeInTheDocument();
    });

    it('should have alt text for weather icons', () => {
      renderWithProviders(<Weather />, {
        preloadedState: preloadedStateMockedData,
      });

      const icons = screen.getAllByRole('img');
      icons.forEach((icon) => {
        expect(icon).toHaveAttribute('alt');
      });
    });
  });
});
