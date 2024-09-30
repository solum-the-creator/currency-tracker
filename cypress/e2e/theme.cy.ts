/// <reference types="cypress" />

export const dataTestId = {
  themeToggle: 'theme-toggle',
};

describe('Theme Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the theme toggle button', () => {
    cy.get(`[data-testid=${dataTestId.themeToggle}]`).should('exist');
  });

  it('should switch to dark theme when toggle is clicked', () => {
    cy.get(`[data-testid=${dataTestId.themeToggle}]`).click();
    cy.get('body').should('have.class', 'light-theme');
    cy.get(`[data-testid=${dataTestId.themeToggle}]`).click();
    cy.get('body').should('not.have.class', 'light-theme');
  });

  it('should persist the selected theme after page reload', () => {
    cy.get(`[data-testid=${dataTestId.themeToggle}]`).click();
    cy.get('body').should('have.class', 'light-theme');

    cy.reload();
    cy.get('body').should('have.class', 'light-theme');
  });
});
