import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './index.css'
import { CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import AppThemeProvider from './theme/AppThemeProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <CssBaseline enableColorScheme />
        <Provider store={store}>
          <App />
        </Provider>
      </AppThemeProvider>
    </Provider>
  </StrictMode>,
)
