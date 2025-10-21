/// <reference types="cypress" />

describe('Game Launching', () => {
  beforeEach(() => {
    cy.visitWithEnglish();
    cy.navigateToSection('games');
  });

  it('should display Games section with game cards', () => {
    cy.findByRole('heading', { name: /games/i }).should('be.visible');
  });

  it('should open game modal when clicking game cover', () => {
    cy.get('img[alt="Cover of Supaplex game"]').parent().click();
    cy.wait(500);
    cy.contains(/supaplex/i).should('be.visible');
    cy.get('[role="dialog"], .MuiModal-root, .MuiDialog-root').should('be.visible');
  });

  it('should close game modal by clicking outside', () => {
    cy.get('img[alt="Cover of Supaplex game"]').parent().click();
    cy.wait(500);
    cy.get('.MuiModal-backdrop').click({ force: true });
    cy.wait(500);
    cy.get('[role="dialog"], .MuiModal-root').should('not.exist');
  });
});
