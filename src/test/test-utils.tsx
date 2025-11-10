import type { ReactElement, ReactNode } from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { setupStore, type RootState } from '@store'
import type { Locale } from '@store/locale'

const theme = createTheme()

export const renderWithProviders = (
  ui: ReactElement,
  { preloadedState = {} as Partial<RootState>, ...renderOptions } = {},
) => {
  const store = setupStore(preloadedState)
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  )

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export const createPreloadedState = (overrides?: Partial<RootState>): RootState => ({
  locale: { current: 'en' as Locale },
  jsDos: { isFullscreen: false },
  weather: { isLoading: false, error: null, data: null },
  ...overrides,
})
