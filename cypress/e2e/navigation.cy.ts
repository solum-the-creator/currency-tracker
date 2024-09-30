/// <reference types="cypress" />

import { navLinks } from '@constants/paths';

export const dataTestId = {
  navigationMenu: 'navigation-menu',
};

describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the navigation menu', () => {
    cy.get(`[data-testid=${dataTestId.navigationMenu}]`).should('exist');
  });

  navLinks.forEach((link) => {
    it(`should navigate to the ${link.name} page`, () => {
      cy.get('nav').contains(link.name).click();
      cy.url().should('include', link.path); // Используем путь из navLinks
      cy.get('a').should('contain', link.name);
    });
  });
});
