/// <reference types="cypress" />

describe('My First Test', () => {
  it('visits the homepage', () => {
    cy.visit('/');
  });
});
