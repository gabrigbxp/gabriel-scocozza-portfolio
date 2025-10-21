/// <reference types="cypress" />

describe('CV Download', () => {
  beforeEach(() => {
    cy.visitWithEnglish();
  });

  it('should open CV in new tab when clicked', () => {
    // Verify link opens in new tab (local file doesn't need rel attribute)
    cy.findByRole('link', { name: /download cv/i })
      .should('have.attr', 'target', '_blank')
      .and('have.attr', 'href', '/cv.pdf');
  });

  it('should be accessible in mobile drawer', () => {
    cy.viewport(375, 667);
    cy.get('[data-testid="MenuIcon"]').parent().click();
    cy.findByRole('link', { name: /download cv/i })
      .should('be.visible')
      .and('have.attr', 'href', '/cv.pdf');
  });
});
