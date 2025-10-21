import { lazy, Suspense } from 'react';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Header, Footer, EasterEgg } from './components';
import { About, Contact } from './views';

// Lazy load heavy components
const TechStack = lazy(() => import('./views/TechStack'));
const Experience = lazy(() => import('./views/Experience'));
const Weather = lazy(() => import('./views/Weather'));
const Games = lazy(() => import('./views/Games'));
const ThisApp = lazy(() => import('./views/ThisApp'));

// Loading component
const SectionLoader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
    <CircularProgress />
  </Box>
);

const App = () => (
  <>
    <Header />
    <Container maxWidth="xl">
      <EasterEgg />
      <Stack spacing={4}>
        <About />
        <Suspense fallback={<SectionLoader />}>
          <TechStack />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Weather />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Games />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ThisApp />
        </Suspense>

        <Contact />
      </Stack>
    </Container>
    <Footer />
  </>
);

export default App;
