export class Generic {
  static visit(user: string = 'google', pass: string = 'password', debug: boolean = false) {
    if (debug) {
      console.log('Attemping to login: ' + user + '@' + pass);
    }
    cy.visit('www.google.pt', { timeout: 2000 });
    // cy.get('.header-login-button' ).click();
    // cy.getDataCy( 'login-email-input' ).type( user );
    // cy.getDataCy( 'login-pass-input' ).type( pass );
    // cy.getDataCy( 'login-login-button' ).click();
    cy.url().should('include', '/');
  }
};
