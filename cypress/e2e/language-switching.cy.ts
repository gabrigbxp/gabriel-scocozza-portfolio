/// <reference types="cypress" />

describe('Language Switching', () => {
  beforeEach(() => {
    cy.visitWithEnglish();
  });

  it('should start in English by default', () => {
    cy.findByRole('button', { name: /about/i }).should('be.visible');
    cy.findByRole('button', { name: /techstack/i }).should('be.visible');
    cy.findByRole('button', { name: /games/i }).should('be.visible');
    cy.findByRole('button', { name: /contact/i }).should('be.visible');
  });

  it('should have language toggle button visible', () => {
    cy.findByRole('button', { name: /español/i }).should('be.visible');
  });

  it('should switch from English to Spanish', () => {
    cy.switchLanguage('es');

    cy.findByRole('button', { name: /acerca/i }).should('be.visible');
    cy.findByRole('button', { name: /clima/i }).should('be.visible');
    cy.findByRole('button', { name: /juegos/i }).should('be.visible');
    cy.findByRole('button', { name: /contacto/i }).should('be.visible');
  });

  it('should persist language preference', () => {
    cy.switchLanguage('es');
    cy.findByRole('button', { name: /acerca/i }).should('be.visible');

    cy.visitWithEnglish();
    cy.findByRole('button', { name: /about/i }).should('be.visible');
    cy.findByRole('button', { name: /español/i }).should('be.visible');
  });
});
