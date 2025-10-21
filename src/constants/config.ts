export const SECTIONS = [
  { id: 'about', label: 'header.about' },
  { id: 'techstack', label: 'header.techstack' },
  { id: 'experience', label: 'header.experience' },
  { id: 'weather', label: 'header.weather' },
  { id: 'games', label: 'header.games' },
  { id: 'this-app', label: 'header.thisApp' },
  { id: 'contact', label: 'header.contact' },
] as const;

export const SCROLL_OFFSET = 72;

export const WEATHER_CONFIG = {
  forecastDays: 4,
  geolocationTimeout: 8000,
  geolocationHighAccuracy: true,
} as const;

export const HEADER_CONFIG = {
  scrollTriggerThreshold: 64,
  activeDetectionOffset: 96,
} as const;
