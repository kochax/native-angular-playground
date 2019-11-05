import { getGreeting } from '../support/app.po';

describe('angular-native', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to angular-native!');
  });
});
