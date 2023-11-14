declare namespace Cypress {
  interface Chainable {
    uploadFile: (selector: string, fileUrl: string, type?: string) => Cypress.Chainable;
    getByTestId: (selector: string) => Cypress.Chainable;
    resetSelectElement: () => Cypress.Chainable;
    clickOutside: () => Cypress.Chainable;
    getSelectItem: (value: string) => Cypress.Chainable;
    getToastBody: () => Cypress.Chainable;
    loginToAuth0: () => Cypress.Chainable;
  }
}
