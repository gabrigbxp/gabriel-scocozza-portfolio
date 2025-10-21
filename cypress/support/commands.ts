/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to navigate to a section by clicking header link
       * @example cy.navigateToSection('about')
       */
      navigateToSection(sectionId: string): Chainable<void>;

      /**
       * Custom command to switch language
       * @example cy.switchLanguage('es')
       */
      switchLanguage(lang: 'en' | 'es'): Chainable<void>;

      /**
       * Custom command to verify section is visible
       * @example cy.verifySectionVisible('techstack')
       */
      verifySectionVisible(sectionId: string): Chainable<void>;

      /**
       * Custom command to visit page with English language forced
       * @example cy.visitWithEnglish()
       */
      visitWithEnglish(url?: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add('navigateToSection', (sectionId: string) => {
  const sectionLabels: Record<string, RegExp> = {
    about: /about|acerca/i,
    techstack: /techstack|stack tecnológico/i,
    weather: /weather|clima/i,
    games: /games|juegos/i,
    thisApp: /this app|esta aplicación/i,
    contact: /contact|contacto/i,
  };

  const label = sectionLabels[sectionId];
  if (!label) {
    throw new Error(`Unknown section ID: ${sectionId}`);
  }

  cy.findByRole('button', { name: label }).click();
  cy.wait(500); // Wait for smooth scroll
});

Cypress.Commands.add('switchLanguage', (lang: 'en' | 'es') => {
  const targetLang = lang === 'en' ? /english/i : /español/i;
  cy.findByRole('button', { name: targetLang }).click();
  
  // Wait for language change to take effect by checking the toggle button text changes
  const newToggleLang = lang === 'en' ? /español/i : /english/i;
  cy.findByRole('button', { name: newToggleLang }).should('be.visible');
});

Cypress.Commands.add('verifySectionVisible', (sectionId: string) => {
  cy.get(`#${sectionId}`).should('be.visible');
});

Cypress.Commands.add('visitWithEnglish', (url = '/') => {
  cy.visit(url, {
    onBeforeLoad(win) {
      // Override navigator.language before app loads
      Object.defineProperty(win.navigator, 'language', {
        writable: false,
        configurable: true,
        value: 'en-US',
      });
      Object.defineProperty(win.navigator, 'languages', {
        writable: false,
        configurable: true,
        value: ['en-US', 'en'],
      });
    },
  });
  
  cy.findByText(/Hi, I'm/i).should('be.visible');
  
  cy.get('body').then(($body) => {
    if ($body.text().includes('Acerca de') || $body.text().includes('Descargar CV')) {
      cy.findByRole('button', { name: /english/i }).click();
      cy.wait(500);
    }
  });
});

export {};
