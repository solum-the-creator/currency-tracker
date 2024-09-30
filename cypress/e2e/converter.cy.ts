/// <reference types="cypress" />

export const dataTestId = {
  currencyCard: 'currency-card',
  currencyModal: 'currency-modal',
  currencySelect: 'currency-select',
  currencyConversionResult: 'currency-conversion-result',
};

describe('Home Page Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the currency cards', () => {
    cy.get(`[data-testid=${dataTestId.currencyCard}]`).should('exist');
    cy.get(`[data-testid=${dataTestId.currencyCard}]`).should('have.length.at.least', 1);
  });

  it('should open modal when currency card is clicked', () => {
    cy.get(`[data-testid=${dataTestId.currencyCard}]`).first().click();
    cy.get(`[data-testid=${dataTestId.currencyModal}]`).should('be.visible');
  });

  it('should allow selecting a different currency in the modal', () => {
    cy.get(`[data-testid=${dataTestId.currencyCard}]`).first().click();
    cy.get(`[data-testid=${dataTestId.currencySelect}]`).select('EUR');
    cy.get(`[data-testid=${dataTestId.currencySelect}]`).should('have.value', 'EUR');
    cy.get(`[data-testid=${dataTestId.currencyConversionResult}]`).should('contain', '€');
  });

  it('should close modal when close button is clicked', () => {
    cy.get(`[data-testid=${dataTestId.currencyCard}]`).first().click();
    cy.get(`[data-testid=${dataTestId.currencyModal}]`).should('be.visible');
    cy.get(`[data-testid=${dataTestId.currencyModal}]`).find('button').click();
    cy.get(`[data-testid=${dataTestId.currencyModal}]`).should('not.exist');
  });
});
