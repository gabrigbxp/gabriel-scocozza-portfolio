# Gabriel Scocozza - Personal Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF.svg)](https://vitejs.dev/)
[![Material-UI](https://img.shields.io/badge/MUI-7.3-007FFF.svg)](https://mui.com/)

A modern, responsive personal portfolio website showcasing my experience as a Full-Stack Developer, featuring interactive DOS games, weather integration, and comprehensive information about my professional journey.

🌐 **[View Live Site](https://gabrigbxp.github.io/gabriel-scocozza-portfolio/)**

## ✨ Features

- 🎨 **Modern Design**: Clean, professional interface built with Material-UI
- 🌓 **Dark/Light Mode**: Fully customizable theme with system preference detection
- 🌍 **Internationalization**: Available in English and Spanish
- 🎮 **Interactive Games**: Play classic DOS games (DooM, Supaplex) directly in the browser via js-dos
- 🌤️ **Weather Integration**: Real-time weather data using WeatherAPI.com
- 📱 **Fully Responsive**: Optimized for all screen sizes and devices
- ♿ **Accessible**: WCAG compliant with semantic HTML and ARIA labels
- ⚡ **Performance**: Fast loading times with code splitting and lazy loading
- 🧪 **Well Tested**: Comprehensive test coverage with Vitest and Cypress

## 🛠️ Tech Stack

### Core Technologies
- **React 19.1** - UI library
- **TypeScript 5.9** - Type-safe JavaScript
- **Vite 7.1** - Build tool and dev server
- **Material-UI 7.3** - Component library and design system
- **Redux Toolkit** - State management
- **js-dos** - DOS emulator for browser games

### Development Tools
- **ESLint** - Code linting ([not-airbnb-eslint-config](https://www.npmjs.com/package/not-airbnb-eslint-config))
- **Prettier** - Code formatting
- **Vitest** - Unit testing
- **Cypress** - E2E testing
- **React Testing Library** - Component testing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gabrigbxp/gabriel-scocozza-portfolio.git
cd gabriel-scocozza-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables (optional but recommended):
```bash
cp .env.example .env.local
```
Then edit `.env.local`

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run unit tests in watch mode
- `npm run test:run` - Run unit tests once
- `npm run test:coverage` - Generate test coverage report
- `npm run cypress` - Open Cypress test runner
- `npm run test:e2e` - Run E2E tests

## 🎯 Project Structure

```
src/
├── assets/          # Static assets (images, games)
├── components/      # Reusable UI components
├── constants/       # Configuration and constants
├── hooks/           # Custom React hooks
├── i18n/            # Internationalization files
├── services/        # API services
├── store/           # Redux store and slices
├── test/            # Test utilities and setup
├── theme/           # MUI theme configuration
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── views/           # Page sections/views
```

## 🧪 Testing

This project includes comprehensive testing:

- **Unit Tests**: Component and utility function tests with Vitest
- **E2E Tests**: User flow testing with Cypress
- **Coverage**: Minimum thresholds enforced for code coverage

Run all tests:
```bash
npm run test:run && npm run test:e2e
```

## 🎮 Features Highlights

### DOS Games Integration
Play classic DOS games directly in your browser thanks to js-dos emulation. Includes:
- DooM (1993)
- Supaplex (1991)

### Weather Component
Real-time weather information with:
- Geolocation support
- IP-based location detection
- 3-day forecast
- Responsive design

### Professional Experience
Detailed showcase of:
- 10+ years of development experience
- Work across multiple industries (Tourism, Government, B2B/B2C)
- International client experience
- Technologies and frameworks used

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Gabriel Gustavo Scocozza**

- Email: [scocozza.gabriel@gmail.com](mailto:scocozza.gabriel@gmail.com)
- LinkedIn: [gabrielscocozza](https://www.linkedin.com/in/gabrielscocozza/)
- GitHub: [@gabrigbxp](https://github.com/gabrigbxp)

## 🙏 Acknowledgments

- **Material-UI** for the excellent component library and theme system
- **js-dos** for making DOS games playable in modern browsers
- **WeatherAPI.com** for weather data
- **GitHub Copilot** for development assistance
- **React Team** for the amazing library

## 📝 Notes

This portfolio was built from scratch following React best practices and modern web development standards. It demonstrates:

- Clean, maintainable code architecture
- Comprehensive testing strategies
- Accessibility best practices
- Performance optimization techniques
- Modern CI/CD workflows

---

⭐ If you like this project, please consider giving it a star on GitHub!
