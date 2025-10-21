import './commands';
import '@testing-library/cypress/add-commands';

// Handle js-dos keyboard lock error in Cypress environment
Cypress.on('uncaught:exception', (err) => {
  // Ignore js-dos keyboard lock error that occurs in Cypress iframe
  if (err.message.includes('lock() must be called from a primary top-level browsing context')) {
    return false;
  }
  // Allow other errors to fail the test
  return true;
});
