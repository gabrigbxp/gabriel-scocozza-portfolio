export default {
  header: {
    about: 'About',
    techstack: 'TechStack',
    experience: 'Experience',
    projects: 'Projects',
    weather: 'Weather',
    games: 'Games',
    thisApp: 'This App',
    contact: 'Contact',
    downloadCV: 'Download CV',
    hi: "Hi, I'm",
    avatarAlt: 'Picture of Gabriel Gustavo Scocozza',
    toggleLanguage: 'Cambiar a Español',
    theme: 'Theme',
    changeTheme: 'Change theme',
    themeSystem: 'System',
    themeLight: 'Light',
    themeDark: 'Dark',
    spanish: 'Español',
    english: 'English',
  },
  about: {
    title: 'About',
    greeting: "👋 Hi! I'm Gabriel Gustavo Scocozza",
    intro:
      "A Full Stack Developer with over 10 years of experience specializing in JavaScript, TypeScript, PHP, React, and Node.js. I've worked across diverse industries including tourism, government, and B2B/B2C platforms, building scalable microservices, microfrontends, and e-commerce solutions.",
    passion:
      "I'm passionate about web technologies, creative coding, and continuous learning. This site showcases my professional journey, technical stack, and some playable MS-DOS classics, because nostalgia meets code! Do you know the Konami code?",
    highlights: {
      experience: '10+ Years Experience',
      position: 'Full Stack Developer',
      certification: 'Azure Certified (AZ-204)',
      languages: 'English (Fluent) & Spanish (Native)',
    },
    softSkills: 'Soft Skills',
    funFact:
      "💡 Fun fact: I've significantly increased operational effectiveness through automation reducing processes from minutes to seconds, and I enjoy integrating complex systems to create seamless user experiences.",
  },
  techstack: {
    title: 'Tech Stack',
    itemsCount: '{{count}} items',
    activelyUse: 'Actively use',
    learned: 'Learned',
    year: 'year',
    years: 'years',
    items: {
      javascript: {
        description: 'Core programming language for web development, the foundation of modern web applications',
        related: {
          versions: 'Versions',
          tools: 'Tools',
        },
      },
      typescript: {
        description:
          'Programming language (superset for JavaScript) for web development and cross-platform applications',
        related: {
          tools: 'Tools',
        },
      },
      frontend: {
        description: 'Technologies and frameworks for building modern, responsive user interfaces',
        related: {
          libraries: 'Libraries',
          frameworks: 'Frameworks',
          styling: 'Styling',
          markup: 'Markup',
        },
      },
      backend: {
        description: 'Server-side technologies for building scalable APIs and business logic',
        related: {
          runtime: 'Runtime',
          frameworks: 'Frameworks',
          concepts: 'Concepts',
        },
      },
      php: {
        description: 'Language for server-side web development',
        related: {
          frameworks: 'Frameworks',
          tools: 'Tools',
        },
      },
      csharp: {
        description: 'Microsoft object-oriented language for various applications',
        related: {
          frameworks: 'Frameworks',
          cloud: 'Cloud',
        },
      },
      java: {
        description: 'Versatile language for enterprise and mobile applications',
        related: {
          uses: 'Uses',
        },
      },
      ruby: {
        description: 'Language focused on simplicity and productivity',
        related: {
          frameworks: 'Frameworks',
        },
      },
      databases: {
        description: 'Database management systems for storing and retrieving data',
        related: {
          sql: 'SQL',
          noSql: 'NoSQL',
          cloud: 'Cloud',
        },
      },
      testing: {
        description: 'Testing frameworks and tools to ensure code quality and reliability',
        related: {
          e2e: 'End-to-End',
          unit: 'Unit Testing',
          quality: 'Code Quality',
        },
      },
      cloudDevops: {
        description: 'Cloud platforms and DevOps tools for deployment, scaling, and automation',
        related: {
          cloud: 'Cloud Services',
          containers: 'Containers',
          versionControl: 'Version Control',
          certification: 'Certification',
        },
      },
      methodologies: {
        description: 'Development methodologies and architectural patterns for building scalable systems',
        related: {
          agile: 'Agile',
          architecture: 'Architecture',
          design: 'Design Patterns',
        },
      },
      git: {
        description: 'Distributed version control system',
        related: {
          platforms: 'Platforms',
        },
      },
      docker: {
        description: 'Platform for building and running applications in containers',
      },
      azure: {
        description: 'Microsoft cloud services platform',
        related: {
          certificated: 'Certificated',
        },
      },
      others: {
        description: "Various other technologies and tools I've worked with",
        related: {
          tools: 'Tools',
          concepts: 'Concepts',
          Web: 'Web',
        },
      },
      continuousLearning: {
        description:
          'I am always willing to continue learning new technologies, tools, and best practices to add more value to each project.',
        related: {
          technical: 'Technical Skills',
          softSkills: 'Soft Skills',
        },
      },
    },
  },
  experience: {
    title: 'Professional Experience',
    present: 'Present',
    year: 'year',
    years: 'years',
    month: 'month',
    months: 'months',
    responsibilities: 'Key Responsibilities',
    technologies: 'Technologies Used',
    jobs: {
      psh: {
        position: 'Full-stack Developer',
        internationalClient: 'Working for international clients (renaissance.com, nearpod.com)',
        responsibilities: {
          0: 'Creation and maintenance of Microservices (NestJS, MySQL) and Microfrontends (React 18)',
          1: 'Maintenance and update of PHP-based services',
          2: 'Integration of different Microfrontends and their components',
          3: 'Maintenance of an internal component library for company-wide use',
          4: 'Bug fixing and performance optimization',
        },
      },
      bairesdev: {
        position: 'Full-stack Developer',
        internationalClient: 'Working for US-based client (Repair Pal)',
        responsibilities: {
          0: 'Moved code from Slim templates (Ruby on Rails) to React for the client Repair Pal (*will need an USA IP to access the site, but VPNs work)',
          1: 'Fixed bugs & created reports for possible performance solutions, created new React Components',
          2: 'Worked in Agile teams up to 5',
        },
      },
      southworks: {
        position: 'Full-stack Developer',
        internationalClient: 'Working for international clients (NDA)',
        responsibilities: {
          0: 'Developed a Speech translator with Azure Blob Storage (POC) incl. storage of conversations, original audios & translations to enable speaking in multiple languages at the same time',
          1: 'Programmed a service with a simple interface to store the needed files with custom information (transcription & translation) using the metadata that ABS stores',
          2: 'Developed a custom solution (Web/Mobile Apps) for using Azure Active Directory (AAD) Business 2 Client (B2C) to identify providers (Twitter, Facebook, Google, Etc...)',
          3: 'Put together a complete guide on how to use AADB2C to create an account with multiple IPs and its implementation with sample.js (unfortunately the repository is still private)',
          4: 'Developed several internal tools to measure the performance of development teams, did regular bug fixes & performance optimizations',
          5: 'Worked in an Agile team of 6',
        },
      },
      'servicios-computables': {
        position: 'Backend Developer',
        responsibilities: {
          0: 'Developed backend in Symfony & Laravel for the governmental app in a team of 4 developers',
          1: 'Automated routines using MySQL triggers, stored procedures & events',
          2: 'Developed image generator procedure in MySQL, considering working days & variable interval according to need, reducing operational time from 2 to 5 minutes to 2 to 5 seconds (according to different variables)',
          3: 'Developed image generator for tickets via barcodes',
          4: 'Created the necessary entities, controllers, and services, along with the unit tests',
          5: "Implemented ticket printing as a JAVA middleware & a complex system of scripts for deployment onto the printing systems enabling to use printers over the network that was not prepared for that, saving money on printers' exchange",
        },
      },
      'gray-line': {
        position: 'Junior Web Developer',
        responsibilities: {
          0: 'Developed a tool to allow selling various product packages online with special rates, performing post-sale calculations & billing',
          1: 'Developed features to easily contact suppliers & prepare itineraries, enhancing control over debits and credits',
          2: 'Reduced the post-sale deal set up time, reduced the possibility of human error by automating manual processes',
          3: 'Performed system integrations with various suppliers and customers (TourCMS, Events Travel), developed robots, automated tasks',
          4: 'Developed a robot to scan Emails for common expressions for Get Your Guide, since they had no integration systems, only used Emails',
          5: 'Performed an integration with the electronic billing system for AFIP, resulting in 200 % effectiveness improvement since invoices are generated and sent automatically',
          6: 'Developed a system for the massive loading of invoices issued and received in the software Régimen de Información de Compras y Ventas (V1.00 Release 5)',
        },
      },
      sip: {
        position: 'Web Developer',
        responsibilities: {
          0: 'Supported already developed sites, conducted minor fixes',
          1: 'Developed https://www.piccadely.com.ar/ from scratch',
        },
      },
      freelance: {
        position: 'Freelance Web Developer',
        responsibilities: {
          0: 'Optimised load times of websites, developed tools and functionalities',
          1: 'Integrated Mercadopago and Todo Pago in http://trebo.com.ar',
        },
      },
    },
  },
  projects: {
    title: 'Open Source Projects',
    intro: 'Some of my personal open source projects that I maintain and actively develop.',
    viewOnGitHub: 'View on GitHub',
    stars: 'stars',
    npm: 'View on NPM',
    featuresTitle: 'Key Features',
    techStackLabel: 'Tech Stack',
    libreqr: {
      name: 'LibreQR',
      description:
        'A private, permanent QR generator with no intermediaries or tracking. Data is encoded directly in the QR (no short links), works offline, and supports Wi‑Fi, vCard, calendar, URLs, text, and geo.',
      features: {
        f0: 'No intermediaries: direct payload, no short links, no expiration',
        f1: 'Works offline: client-side generation with zero tracking',
        f2: 'QR types: Wi‑Fi, vCard (contact), calendar events, URLs, text, geo',
        f3: 'Customization: colors and styling presets with responsive UI',
        f4: 'Export as PNG with sensible defaults and error correction options',
      },
      techStack: 'React + TypeScript, Material‑UI, Redux Toolkit, Electron (desktop), qrcode library',
    },
    notAirbnbEslint: {
      name: 'not-airbnb-eslint-config',
      description:
        'Modern ESLint 9+ Flat Config for React + TypeScript with Prettier integration. Zero-config to start, customizable, and includes all dependencies to avoid peer-dep hassles.',
      features: {
        f0: 'ESLint 9+ Flat Config with modern defaults',
        f1: 'TypeScript-ready with first-class support',
        f2: 'React, hooks, and a11y rules included',
        f3: 'Prettier integrated — no conflicts',
        f4: 'Zero-config to start, fully customizable later',
        f5: 'All dependencies included to avoid peer dep pain',
      },
      techStack: 'ESLint, TypeScript, Node.js',
      npmDownloads: 'NPM downloads',
    },
  },
  weather: {
    title: 'Weather',
    description:
      'This component is a REST API implementation sample that allows fetching and displaying real-time weather information using WeatherAPI.com.',
    useGeolocation: 'Use geolocation',
    detectByIP: 'Detect by IP',
    loading: 'Loading...',
    unit: 'Unit',
    celsius: '°C',
    fahrenheit: '°F',
    feelsLike: 'Feels like: {{temp}}°{{unit}}',
    next3Days: 'Next 3 days',
    max: 'Max: {{temp}}°{{unit}}',
    min: 'Min: {{temp}}°{{unit}}',
  },
  games: {
    title: 'Games',
    howAchieved: 'How was achieved?',
    intro:
      'Want to take a break? These games were made for MS-DOS, are fun, and can be played from any computer with a keyboard and/or mouse.',
    readMore: 'Read more',
    playGame: 'Play',
    supaplex: {
      description:
        'Supaplex is a video game created by Philip Jespersen and Michael Stopp, and published by Digital Integration in 1991. It is a game that reminds many players of Pac-Man.',
    },
    doom: {
      description:
        'DooM is a 1993 first-person shooter game developed and published by id Software for MS-DOS. While it was not the first first-person shooter game, Doom was the title that marked a turning point in the genre, setting new standards and influencing countless games that followed.',
    },
    achievement: {
      title: 'How was it achieved?',
      close: 'close',
      jsDos: {
        title: 'js-dos Emulator',
        description:
          'is a powerful JavaScript library that enables running DOS and Windows 9x programs directly in modern browsers and Node.js environments. It provides a complete emulation layer that brings classic games to life without requiring any additional software installation.',
      },
      selfHosted: {
        title: 'Self-Hosted Implementation',
        description:
          'To ensure reliability and avoid dependency on external servers, this portfolio uses a fully self-hosted instance. Both the emulator engine and game files are served directly from this application, providing:',
        features: {
          offline: 'Complete offline functionality',
          noTracking: 'No third-party tracking or analytics',
          fastLoading: 'Fast loading times with optimized caching',
          fullControl: 'Full control over the gaming experience',
        },
      },
      legal: {
        title: 'Legal Notice',
        description:
          'The games featured here are classic DOS titles that have been made freely available or are considered abandonware. They are presented for educational and demonstration purposes only, with no commercial intent. All games are adapted to run in modern browsers using open-source emulation technology.',
      },
      technologies: {
        title: 'Technologies used:',
      },
    },
  },
  contact: {
    title: 'Contact',
    intro: 'Feel free to get in touch through any of these channels:',
    email: 'Send me an email',
  },
  footer: {
    builtWith: 'Built with React + MUI',
    viewSource: 'View source code on GitHub',
  },
  thisApp: {
    title: 'This App',
    intro:
      'I built this portfolio from scratch following React recommendations, which led me to use Vite for the first time.',
    design: {
      title: 'Design Approach',
      content:
        'I should mention that I have no UI/UX experience, I simply lack imagination for design and have never studied it formally. So I decided to draw inspiration from portfolios I admire and try to replicate certain features that seemed interesting.',
    },
    materialUI: {
      title: 'Material-UI',
      content:
        'I chose to use Material-UI because I find its approach to structuring pages and its theme creation tool very powerful and developer-friendly.',
    },
    aiAssistance: {
      title: 'AI Tools',
      githubCopilot:
        'GitHub Copilot (premium) helped me a lot with code completion and suggestions, although I always reviewed what it generated to ensure it made sense. It was particularly helpful with styling and the theme system.\nWhile I already had experience creating themes, Copilot wrote most of the initial code: defining the color palette, typography and spacing. However, the final result works properly thanks to my adjustments, since Copilot combined outdated and experimental logic that I had to fix and refine.',
      chatGPT: 'ChatGPT (free) also helped a bit with design, mainly offering alternatives.',
    },
    eslintConfig: {
      title: 'ESLint Configuration',
      content:
        'For this project, I used my own ESLint configuration package: not-airbnb-eslint-config, which is available on npm. This package provides a comprehensive set of rules based on industry best practices, adapted to my coding style and preferences.',
    },
    weatherAPI: {
      title: 'Weather API',
      content:
        "For the weather API, I used WeatherAPI.com, which I'd never used before, but found simple and well-documented. I could have used TanStack Query for API calls, but decided to use fetch directly to avoid adding more complexity to the application.",
    },
    jsDos: {
      title: 'JS-DOS Integration',
      content:
        "I'd never used js-dos before, but I felt this was the perfect opportunity to implement a tool that's new to me and very interesting.",
    },
  },
} as const
