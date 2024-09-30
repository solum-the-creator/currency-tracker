/// <reference types="cypress" />

export const dataTestId = {
  timelineChart: 'timeline-chart',
  currencySelect: 'currency-select',
  currencyCode: 'currency-code',
};

describe('Timeline Chart Tests', () => {
  beforeEach(() => {
    cy.visit('/timeline');
  });

  it('should display the timeline chart', () => {
    cy.get(`[data-testid=${dataTestId.timelineChart}]`).should('exist');
  });

  it('should update the chart when currency is changed', () => {
    cy.get(`[data-testid=${dataTestId.currencySelect}]`).select('BTC');
    cy.get(`[data-testid=${dataTestId.currencyCode}]`).should('contain', 'BTC');
    cy.get(`[data-testid=${dataTestId.timelineChart}]`).should('exist');
  });
});
